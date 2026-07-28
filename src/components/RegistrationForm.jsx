<Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
  <Route index element={<Dashboard />} />
  <Route path="courses" element={<CoursesList />} />
  <Route path="courses/new" element={<CourseForm />} />
  <Route path="courses/:id/edit" element={<CourseForm />} />
  <Route path="products" element={<ProductsList />} />
  <Route path="testimonials" element={<TestimonialsList />} />
  <Route path="news" element={<NewsList />} />
  <Route path="documents" element={<DocumentsList />} />
</Route>
<Route path="/admin/login" element={<Login />} />