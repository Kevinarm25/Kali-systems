import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Términos y Condiciones — KALI Systems",
  description:
    "Términos y condiciones de uso de los servicios de KALI Systems.",
};

export default function TerminosPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Términos y Condiciones"
      lastUpdated="2026"
    >
      <h2>Uso del sitio</h2>
      <p>
        El acceso y uso del sitio web de <strong>KALI Systems</strong> implica la
        aceptación plena de los presentes términos y condiciones. El usuario se
        compromete a utilizar el sitio y los servicios ofrecidos de manera
        responsable, conforme a la legislación vigente y a la buena fe.
      </p>

      <h2>Servicios ofrecidos</h2>
      <p>
        KALI Systems ofrece servicios de automatización con inteligencia artificial
        orientados a negocios, incluyendo, entre otros:
      </p>
      <ul>
        <li>Automatización de WhatsApp, Instagram y Facebook.</li>
        <li>Sistemas inteligentes de atención al cliente.</li>
        <li>Captura y calificación de leads.</li>
        <li>Seguimiento automático y CRM integrado.</li>
        <li>Implementación de flujos personalizados según el negocio.</li>
      </ul>
      <p>
        Los alcances, tiempos y entregables específicos de cada servicio se
        definen mediante acuerdo previo con el cliente.
      </p>

      <h2>Limitación de responsabilidad</h2>
      <p>
        KALI Systems se compromete a brindar servicios profesionales de alta
        calidad, sin embargo, no garantiza resultados comerciales específicos,
        ya que estos dependen de múltiples factores externos como la operación
        del negocio del cliente, su mercado y su capacidad de respuesta.
      </p>
      <p>
        KALI Systems no será responsable por interrupciones de servicio causadas
        por terceros (proveedores de mensajería, redes sociales, hosting,
        plataformas de IA), ni por cambios en sus políticas o APIs que afecten
        las automatizaciones implementadas.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Todos los contenidos, marcas, logotipos, textos, gráficos, código,
        flujos, sistemas y materiales presentes en el sitio y en los servicios
        de KALI Systems son propiedad exclusiva de la empresa o de sus
        licenciantes. Queda prohibida su reproducción, distribución o
        modificación sin autorización previa por escrito.
      </p>

      <h2>Uso indebido</h2>
      <p>
        Está estrictamente prohibido utilizar los servicios de KALI Systems para:
      </p>
      <ul>
        <li>Enviar spam o comunicaciones no solicitadas masivas.</li>
        <li>Realizar prácticas fraudulentas, engañosas o ilegales.</li>
        <li>Vulnerar derechos de terceros o leyes de protección de datos.</li>
        <li>Intentar acceder de forma no autorizada a sistemas o datos.</li>
      </ul>
      <p>
        El incumplimiento de estas condiciones podrá derivar en la suspensión
        inmediata del servicio sin reembolso, así como en las acciones legales
        correspondientes.
      </p>

      <h2>Cambios en el servicio</h2>
      <p>
        KALI Systems se reserva el derecho a modificar, suspender o discontinuar,
        de manera total o parcial, cualquiera de sus servicios, así como a
        actualizar los presentes términos en cualquier momento. Las modificaciones
        entrarán en vigor a partir de su publicación en el sitio web.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier consulta relacionada con estos términos y condiciones,
        puedes escribirnos a{" "}
        <a href="mailto:contacto@kalisystems.mx">contacto@kalisystems.mx</a>.
      </p>
    </LegalLayout>
  );
}
