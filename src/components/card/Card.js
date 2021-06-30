export default {
    name: "Card",
    // Propiedades del componente
    // se recomienda especificar tipo
    props: {
      data: {
        type: Object
      },
      visible: {
        required: true,
      },
    },
  };