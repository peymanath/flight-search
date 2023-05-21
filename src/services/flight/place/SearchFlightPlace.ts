import { Http } from '@/services/HttpRequestConfig';

interface SearchFlightPlaceRequestInterface {
    searchValue: string;
}

export default async function SearchFlightPlaceRequest({
    searchValue,
}: SearchFlightPlaceRequestInterface) {
    return await Http.get(`/flight/place/search/?query=${searchValue}`);
}
