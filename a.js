import addressService from "address-service-js";
async function func(a) {
    const res = await addressService(a)
    console.log(res)
}
func("20 a")