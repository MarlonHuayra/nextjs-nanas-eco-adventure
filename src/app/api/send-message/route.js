import Twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = Twilio(accountSid, authToken);

export async function POST(req) {
    const { to, name } = await req.json(); // Asegúrate de recibir el número y el nombre

    try {
        const message = await twilioClient.messages.create({
            to: `whatsapp:${to}`, // Asegúrate de que 'to' esté en el formato correcto
            from: 'whatsapp:+14155238886', // Número de sandbox de Twilio
            body: `Hola ${name} se te quiero un monton xD!`, // Mensaje personalizado
        });

        return new Response(JSON.stringify({ success: true, messageSid: message.sid }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
