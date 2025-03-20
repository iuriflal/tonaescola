import { createContext, useState, useContext } from "react";

// Criando o contexto
const FormContext = createContext();

// Provedor do contexto
export const FormProvider = ({ children }) => {
  // Estado global do formulário
  const [formData, setFormData] = useState({
    aluno: "",
    pai: "",
    mae: "",
    escola: "",
    contato: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Hook para usar o contexto
export const useForm = () => useContext(FormContext);