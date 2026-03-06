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
                        role: 'assistant',
                        content: message,
                    }
                ],
                model: 'command-r-plus-08-2024',
                documents: [
                    {
                        data: {
                            agent: 'Da respuestas cortas por favor, almenos en cuanto a informacion.'
                        }
                    },
                    {
                        data: {
                            title: "Política de Precios Hosting",
                            snippet: "El precio del hosting se ajusta a los recursos técnicos (CPU, RAM, Almacenamiento). El rango estándar está entre los $10 USD mensuales (VPS básico) hasta los $200 USD mensuales (Servidor dedicado de alto rendimiento)."
                        }
                    }
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