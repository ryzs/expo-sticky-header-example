import { createContext, ReactNode, useContext } from "react";

type ServiceData = {
  serviceName: string
  reviews: string[]
}

const ServiceContext = createContext<ServiceData | null>(null)

const ServiceContainer = ({ children }: { children: ReactNode }) => {
  const serviceName= 'Some service'
  const reviews = ['Looks good', 'Clean', 'Awesome']

  return (
    <ServiceContext.Provider value={{ serviceName, reviews }}>
      {children}
    </ServiceContext.Provider>
  )
}


const useServiceContainer = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error(
      'Service compound components cannot be rendered outside the Service component'
    );
  }
  return context;
}

export { ServiceContext, ServiceContainer, useServiceContainer }
