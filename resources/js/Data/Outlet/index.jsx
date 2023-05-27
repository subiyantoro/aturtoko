import fetchApi from "@/Services/fetchApi"
import { METHODS } from "@/utils/methods"

const endpoint = {
    list: route('outlets_api')
}

export const outletList = payload => fetchApi(`${endpoint.list}`, METHODS.GET, payload, {});
