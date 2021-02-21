namespace Types {
  export interface Product {
    id: string
    name: string
    bin: number
    cardNetwork: string
    config: { connectorURL: string }
    description: string
    version: string
    authPlans: string[]
  }

  export interface cardNetworkInfo {
    logoURL: string
    logoBgColor: string
  }

  export interface cardNetworkLogos {
    amex: cardNetworkInfo
    visa: cardNetworkInfo
    mastercard: cardNetworkInfo
    rupay: cardNetworkInfo
    maestro: cardNetworkInfo
  }

  export interface jsonData {
    products:Product[]
    cardNetworkLogos:cardNetworkLogos
  }
}
