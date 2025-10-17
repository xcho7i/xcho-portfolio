import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import config from "@/config";

export default function Contact() {
  
  return (
    <main
      id="contact"
      className="pt-20 lg:pt-[0rem] bg-[#04081A]
 text-white"
    >
      <section className="hero pb-20 pt-20 flex flex-col items-center relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">-Contact Me-</h1>
          <p className="text-gray-300 text-lg">
            Have a question or want to work together? 
          </p>
        </div>
        <div className="container mx-auto">
          <div className="items-center justify-center">
            <div className="space-y-8 flex flex-row justify-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">{config.developerEmail}</p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.68.96.98-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.28 1.23.45 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-400">
                      <a
                        href={`https://wa.me/${config.developerPhone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {config.developerPhone}
                      </a>
                    </p>
                  </div>
                </div> */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.993 15.674l-.426 4.01c.61 0 .872-.262 1.19-.576l2.857-2.713 5.922 4.32c1.085.597 1.86.283 2.14-.998l3.885-18.23c.344-1.59-.576-2.21-1.62-1.83L1.13 9.13c-1.55.61-1.53 1.49-.266 1.88l4.77 1.49 11.08-6.99c.52-.33.995-.15.605.21"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Telegram</h3>
                    <p className="text-gray-400">
                      <a
                        href={`https://t.me/${config.developerTelegramUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        @{config.developerTelegramUsername}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-500/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.899-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-gray-400">
                      <a
                        href={`https://github.com/${config.developerGithubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        @{config.developerGithubUsername}
                      </a>
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">{config.developerAddress}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
