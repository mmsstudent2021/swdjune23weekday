import { ApiService } from "../apiService";

const todoEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
    }),
    postTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        body: formData,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetTodoQuery, usePostTodoMutation } = todoEndpoint;

// Get => Query
// hook
// post,patch,put,delete => mutation
