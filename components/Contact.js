export default function Contact() {
    return (
      <section class="text-gray-600">
        <div class="max-w-5xl pt-52 pb-24 mx-auto m-auto">
        <h2 class="pt-3 mt-10 font-semibold text-6xl text-white mb-10">
              Contact M-Open73
            </h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013.2705685913277!2d-0.3351534981348243!3d51.55732793347294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761301c319371b%3A0xf517031e60aaa55f!2s20%20Rosebank%20Ave%2C%20Wembley%20HA0%202TW%2C%20UK!5e0!3m2!1sen!2s!4v1652639206226!5m2!1sen!2s" width="1000" height="450" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
  <section class="flex-center text-align:center; align:center;">
    <div class="flex-center align-center">
      <form method= "post">
      <label for="name">Name</label>
      <input
                type="text"
                placeholder="Your Name"
                name="name"
                autocomplete="name"
                class="border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />
              <br/>
              <label for="name" class="border-gray-600">Phone</label>
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                autocomplete="phone"
                class="border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />
              <br/>
              <label for="name">Message</label>
              <textarea
                type="text"
                placeholder="Your Name"
                name="name"
                autocomplete="name"
                class="border border-gray-600 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />
              <br/>
              <a
                class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                href="/"
              >
                <span class="justify-center">Send</span>
              </a>
      </form>
    </div>
  </section>
    
        <section class="relative pb-24">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div class="py-24 md:py-36">
              <h1 class="mb-5 text-6xl font-bold text-white">
                Subscribe to our newsletter
              </h1>
              <h1 class="mb-9 text-2xl font-semibold text-gray-200">
                Enter your email address and get our newsletters straight away.
              </h1>
              <input
                type="email"
                placeholder="jack@example.com"
                name="email"
                autocomplete="email"
                class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />{" "}
              <a
                class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                href="/"
              >
                <span class="justify-center">Subscribe</span>
              </a>
            </div>
          </div>
        </section>
      </section>
    );
  }
  