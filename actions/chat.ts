"use server"

export const chat = async (message: string) => {
    try {
        const response = await fetch('https://api.cohere.ai/v2/chat', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.API_CHAT_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'system',
                        content: 'Eres un asistente de ventas experto en hosting y desarrollo web. Tu objetivo es ayudar a los clientes a elegir entre una página web o una tienda online basándote estrictamente en los documentos proporcionados. Por favor solo responde con lo estrictamente necesario.'
                    },
                    {
                        role: 'system',
                        content: 'En caso de que deseen contactarse con alguien de ventas, simplemente responde con "+57 300 0000000".'
                    },
                    {
                        role: 'user',
                        content: message,
                    },

                ],
                model: 'command-r-plus-08-2024',
                documents: [
                    {
                        data: {
                            title: "Política de Precios Hosting",
                            snippet: "El precio del hosting se ajusta a los recursos técnicos (CPU, RAM, Almacenamiento). El rango estándar está entre los $10 USD mensuales (VPS básico) hasta los $200 USD mensuales (Servidor dedicado de alto rendimiento)."
                        }
                    },
                    {
                        data: {
                            title: "Servicio de Tienda Online (E-commerce)",
                            snippet: "Nuestras tiendas online incluyen catálogo de productos ilimitado, carrito de compras, integración con pasarelas de pago (Stripe, PayPal, Mercado Pago) y panel de administración de inventario. El precio base es de $500 USD e incluye configuración de envíos y certificado SSL por un año."
                        }
                    },
                    {
                        data: {
                            title: "Servicio de Página Web Corporativa",
                            snippet: "El diseño de página web informativa o corporativa está enfocado en presencia digital y marca. Incluye secciones como 'Inicio', 'Nosotros', 'Servicios' y 'Contacto' con formulario. No incluye funciones de venta directa. El precio inicia desde los $250 USD y el tiempo de entrega es de 7 a 10 días hábiles."
                        }
                    },
                ]
            }),
        });

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Cohere API error:', response.status, errorText)
            throw new Error(`API error: ${response.status} - ${errorText}`)
        }

        return response.json();
    } catch (error) {
        console.error('Chat error:', error);
        throw error;
    }
}