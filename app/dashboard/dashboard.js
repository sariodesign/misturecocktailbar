import { nhost } from "../utils/nhost";
console.log('nHost init:', nhost)

const { isAuthenticated, isLoading } = nhost.auth.getAuthenticationStatus()

if (isLoading) {
  console.log('Loading...')
}

if (isAuthenticated) {
  console.log('User is authenticated')
}

// Get cocktails
/* const getCocktails = nhost.graphql.request(`
    query {
        cocktails {
            id
            name
            ingredients
            price
        }
    }
`)

getCocktails.then((data) => {
    console.log('Cocktails list: ', data.data)
}) */