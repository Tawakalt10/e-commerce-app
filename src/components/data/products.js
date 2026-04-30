 const products = [ 
    {
    id: 1,
    name: "Blender",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: " A 4-set cup blender with sharp blades and a strong 600W motor, suitable for blending and grinding"
},

   {
    id: 2,
    name: "Kettle",
    price: "$8.99",
    image: "https://plus.unsplash.com/premium_photo-1723600987663-33bba551b7ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A compact electric kettle with fast boiling and automatic shut-off. " 
},

   {
    id: 3,
    name: "Microwave",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A durable microwave oven with easy controls for quick heating "
   
   },
   
   {
    id: 4,
    name: "A Standing Fan",
    price: "$7.99",
    image: "https://images.unsplash.com/photo-1665298455913-dd43714f5ad1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A powerful standing fan with adjustable speed settings "
},

   {
    id: 5,
    name: "Rice Cooker",
    price: "$15.99",
    image: "https://plus.unsplash.com/premium_photo-1718051630937-30392ca3d687?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A rice cooker with automatic cooking and keep-warm function"
},

   {
    id: 6,
    name: "Pressing Iron",
    price: "$9.99",
    image: " https://plus.unsplash.com/premium_photo-1678218584651-dd4382c8224c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A steam iron with smooth glide and adjustable temperature control  "
},

   {
    id: 7,
    name: "Washing Machine",
    price: "$40.99",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A durable washing machine with strong performance and easy controls for everyday laundry. "
   },

   {
    id: 9,
    name: "Refrigerator",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1721613877687-c9099b698faa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A compact refrigerator with efficient cooling and low power consumption "

   }, 

    {
    id: 10,
    name: " Set of Cooking Pots",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1604414499020-f9ac575bc5ec?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A complete set of pots made with quality material, suitable for everyday cooking."
    
},

 ];

 export function getProducts() {
    return products;
 }

  export function getProductById(id){
    return products.find((p)=> p.id === Number (id));
 }