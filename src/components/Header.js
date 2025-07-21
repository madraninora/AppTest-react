

function Header() {
  return (
    <div className="App">

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 bg-gray-100">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-teal-400 ms-10">Yeeply</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">Se Connecter</a>
           <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Recevoir un Devis</button>
        </div>
    </div>
</nav>
<nav class="bg-gray-200 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex justify-center items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Comment ça Marche</a>
                </li>
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline">Pourquoi Yeeply</a>
                </li>
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline">Professionnels</a>
                </li>
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline">Clients</a>
                </li>
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline">Prix</a>
                </li>
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline">Qui Somme Nous?</a>
                </li>
                <li>
                    <a href="" class="text-gray-900 dark:text-white hover:underline">Ressources</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  );
}

export default Header;