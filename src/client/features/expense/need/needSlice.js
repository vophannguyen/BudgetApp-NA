import api from "../../../store/api";

const needApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNeeds: builder.query({
      query: () => "/need",
      providesTags: ["Need"],
    }),
    createNeeds: builder.mutation({
      query: (data) => ({
        url: "/need",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Need"],
    }),
    deleteNeed: builder.mutation({
      query: (id) => ({
        url: `/need/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Need"],
    }),
  }),
});
export const {
  useGetNeedsQuery,
  useCreateNeedsMutation,
  useDeleteNeedMutation,
} = needApi;
