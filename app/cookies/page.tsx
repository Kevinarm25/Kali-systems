import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Política de Cookies — KALI Systems",
  description:
    "Información sobre el uso de cookies en el sitio web de KALI Systems.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Política de Cookies"
      lastUpdated="2026"
    >
      <h2>Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan
        en el dispositivo del usuario al ser visitados. Permiten recordar
        información sobre la visita, como preferencias de idioma y otras
        opciones, lo que facilita la próxima navegación y hace al sitio más útil.
      </p>

      <h2>Cómo se utilizan</h2>
      <p>
        En <strong>KALI Systems</strong> utilizamos cookies para:
      </p>
      <ul>
        <li>Garantizar el correcto funcionamiento del sitio.</li>
        <li>Recordar preferencias del usuario.</li>
        <li>Analizar el uso del sitio y mejorar su rendimiento.</li>
        <li>Optimizar la experiencia de navegación.</li>
      </ul>

      <h2>Cookies analíticas</h2>
      <p>
        Estas cookies nos permiten conocer cómo los usuarios interactúan con el
        sitio: páginas visitadas, tiempo de permanencia, dispositivos utilizados,
        entre otros. Esta información se utiliza de forma agregada y anónima
        para mejorar la calidad del sitio y los servicios ofrecidos.
      </p>

      <h2>Cookies funcionales</h2>
      <p>
        Las cookies funcionales permiten que el sitio recuerde decisiones que
        tomas (como tu sesión, preferencias de visualización o configuración de
        formularios) para ofrecerte una experiencia más personalizada y fluida.
      </p>

      <h2>Cómo desactivarlas</h2>
      <p>
        Puedes configurar tu navegador para aceptar, rechazar o eliminar las
        cookies en cualquier momento. La gestión se realiza desde los ajustes
        del propio navegador. A continuación, algunos enlaces de referencia:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>
        Ten en cuenta que la desactivación de ciertas cookies puede afectar el
        funcionamiento óptimo del sitio.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier duda relacionada con esta Política de Cookies, puedes
        escribirnos a{" "}
        <a href="mailto:contacto@kalisystems.mx">contacto@kalisystems.mx</a>.
      </p>
    </LegalLayout>
  );
}
