export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-md border border-gray-100 rounded-lg text-gray-900">
      <h2 className="text-3xl font-semibold mb-4 text-center">Contacto</h2>
      <p className="mb-6 text-center text-gray-600">
        No dudes en ponerte en contacto conmigo por cualquier duda o consulta. Puedes enviarme un correo electrónico a{' '}
        <a className="text-blue-600 font-medium hover:underline" href="mailto:laiunmiguel@hotmail.com">laiunmiguel@hotmail.com</a>.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <h2 className="text-lg font-medium mb-2 sm:mb-0 self-center">También puedes encontrarme en:</h2>
        <a
          className="block text-center px-4 py-2 bg-linkedin rounded-md hover:brightness-110 hover:scale-105 transition text-white"
          href="https://www.linkedin.com/in/miguel-laiun-913442324/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="block text-center px-4 py-2 bg-black rounded-md hover:bg-gray-800 hover:scale-105 transition text-white"
          href="https://github.com/LaiunMiguel"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
