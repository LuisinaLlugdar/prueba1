import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from './ssr-7fae8f6a.js';
import { P as PublicHeader } from './publicHeader-aa4f05a7.js';
import { P as PublicFooter } from './publicFooter-40c61ea5.js';
import './utils-67317de5.js';

const gamilIcon = "/_app/immutable/assets/gmail.d2c6ec8b.svg";
const whatsIcon = "/_app/immutable/assets/whatsapp.7d01eba5.svg";
const instaIcon = "/_app/immutable/assets/instagram.2dc31e42.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  return `${validate_component(PublicHeader, "PublicHeader").$$render($$result, {}, {}, {})} <div class="py-24"><div class="container mx-auto text-center"><h2 class="text-4xl font-semibold" data-svelte-h="svelte-gw8jr1">Contáctanos</h2> <p class="text-gray-600 mt-2" data-svelte-h="svelte-vokn2d">¡Estamos aquí para ayudarte! Ponte en contacto con nosotros a través de las siguientes vías:</p> <div class="flex justify-center items-center mt-8" data-svelte-h="svelte-13mh2c"><div class="mr-8"><div class="flex justify-center items-center"><img${add_attribute("src", gamilIcon, 0)} alt="" class="w-12 h-12 mb-2"></div> <p class="text-gray-600">contact@example.com</p></div> <div class="mr-8"><div class="flex justify-center items-center"><img${add_attribute("src", whatsIcon, 0)} alt="" class="w-12 h-12 mb-2"></div> <p class="text-gray-600">+1 (123) 456-7890</p></div> <div><div class="flex justify-center items-center"><img${add_attribute("src", instaIcon, 0)} alt="" class="w-12 h-12 mb-2"></div> <p class="text-gray-600">@instagram_account</p></div></div> <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-8"><form><div class="mb-4"><label for="name" class="block text-gray-700 font-semibold mb-2" data-svelte-h="svelte-rg09xa">Nombre:</label> <input type="text" id="name" placeholder="Tu nombre" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"${add_attribute("value", name, 0)}></div> <div class="mb-4"><label for="email" class="block text-gray-700 font-semibold mb-2" data-svelte-h="svelte-xycss3">Correo Electrónico:</label> <input type="email" id="email" placeholder="tucorreo@example.com" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"${add_attribute("value", email, 0)}></div> <div class="mb-4"><label for="message" class="block text-gray-700 font-semibold mb-2" data-svelte-h="svelte-1g82xk0">Mensaje:</label> <textarea id="message" placeholder="Escribe tu mensaje aquí" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 h-32">${escape("")}</textarea></div> <button type="submit" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" data-svelte-h="svelte-jo2ly6">Enviar Mensaje</button></form></div></div></div> ${validate_component(PublicFooter, "PublicFooter").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-07de01f5.js.map
