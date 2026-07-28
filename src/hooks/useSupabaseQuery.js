import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useSupabaseQuery(table, options = {}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const {
    select = '*',
    filters = [],
    orderBy = { column: 'created_at', ascending: false },
    limit,
  } = options

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setLoading(true)
      let query = supabase.from(table).select(select)
      filters.forEach(({ column, operator, value }) => {
        query = query[operator || 'eq'](column, value)
      })
      if (orderBy) query = query.order(orderBy.column, { ascending: orderBy.ascending })
      if (limit) query = query.limit(limit)

      const { data, error } = await query
      if (error) throw error
      setData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, refetch: fetchData }
}
