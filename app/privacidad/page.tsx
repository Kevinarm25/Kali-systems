import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Aviso de Privacidad — KALI Systems",
  description:
    "Aviso de privacidad y tratamiento de datos personales en KALI Systems.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Aviso de Privacidad"
      lastUpdated="2026"
    >
      <h2>Responsable de los datos</h2>
      <p>
        <strong>KALI Systems</strong> es responsable del tratamiento, uso y protección
        de los datos personales proporcionados por sus usuarios, clientes y prospectos
        a través de los distintos canales digitales operados por la empresa.
      </p>

      <h2>Datos que recopilamos</h2>
      <p>
        KALI Systems recopila información proporcionada voluntariamente por los
        usuarios a través de formularios, WhatsApp, redes sociales y medios de
        contacto digitales con el objetivo de responder solicitudes, brindar
        información comercial, automatizar procesos y mejorar nuestros servicios.
      </p>
      <p>
        La información puede incluir:
      </p>
      <ul>
        <li>Nombre completo</li>
        <li>Correo electrónico</li>
        <li>Teléfono o número de WhatsApp</li>
        <li>Empresa o negocio</li>
        <li>Mensajes enviados a través de nuestros canales</li>
        <li>Datos básicos de navegación (IP, navegador, dispositivo)</li>
      </ul>

      <h2>Uso de la información</h2>
      <p>
        La información recopilada se utiliza con las siguientes finalidades:
      </p>
      <ul>
        <li>Responder solicitudes de contacto e información.</li>
        <li>Brindar información comercial sobre nuestros servicios.</li>
        <li>Automatizar procesos de atención y seguimiento.</li>
        <li>Mejorar la calidad y experiencia de nuestros servicios.</li>
        <li>Generar estadísticas internas de uso y desempeño.</li>
      </ul>

      <h2>Automatizaciones y seguimiento comercial</h2>
      <p>
        Como empresa especializada en automatización con inteligencia artificial,
        KALI Systems puede utilizar sistemas automatizados para dar seguimiento
        comercial a los usuarios que han iniciado contacto a través de WhatsApp,
        formularios, redes sociales u otros canales. Estos sistemas se utilizan
        exclusivamente para fines de atención, seguimiento e información comercial,
        y nunca para enviar contenido no solicitado fuera del contexto del servicio.
      </p>

      <h2>Protección de información</h2>
      <p>
        KALI Systems no vende información personal a terceros. La información solo
        podrá compartirse con plataformas tecnológicas necesarias para operar los
        servicios contratados (por ejemplo, proveedores de mensajería, CRM,
        analíticas o pagos), bajo estrictos acuerdos de confidencialidad y
        únicamente en la medida necesaria para la prestación del servicio.
      </p>
      <p>
        Implementamos medidas técnicas, administrativas y organizativas razonables
        para proteger los datos personales contra pérdida, uso indebido, acceso no
        autorizado, divulgación, alteración o destrucción.
      </p>

      <h2>Derechos ARCO</h2>
      <p>
        El usuario puede solicitar en cualquier momento el acceso, rectificación,
        cancelación u oposición (Derechos ARCO) sobre el tratamiento de sus datos
        personales, así como revocar el consentimiento otorgado.
      </p>
      <p>
        Para ejercer estos derechos, basta con enviar una solicitud al correo{" "}
        <a href="mailto:contacto@kalisystems.mx">contacto@kalisystems.mx</a>{" "}
        indicando el nombre completo, el dato a tratar y la solicitud específica.
      </p>

      <h2>Uso de tecnologías y cookies</h2>
      <p>
        Nuestro sitio web utiliza cookies y tecnologías similares para mejorar la
        experiencia de navegación, analizar el uso del sitio y optimizar nuestros
        servicios. Para más información, consulta nuestra{" "}
        <a href="/cookies">Política de Cookies</a>.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier duda, aclaración o solicitud relacionada con este Aviso de
        Privacidad, puedes escribirnos a:
      </p>
      <ul>
        <li>
          Correo:{" "}
          <a href="mailto:contacto@kalisystems.mx">contacto@kalisystems.mx</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
