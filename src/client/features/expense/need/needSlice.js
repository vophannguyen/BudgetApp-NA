import api from "../../../store/api";

const needApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNeeds: builder.query({
      query: () => "/need",
      method: "GET",
      providesTags: ["Need"],
    }),
  }),
});
export const { useGetNeedsQuery } = needApi;
