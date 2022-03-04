import React from "react";

export default function WeddingAnnouncement() {
  return (
    <div className="container mx-auto flex flex-col items-center mt-20">
      <p className="font-serif text-2xl xl:text-5xl	mb-1 xl:mb-4">
        Dian <span style={{ fontFamily: "LasminiYahut" }}>&</span> Deka
      </p>
      <p className="font-serif text-2xl xl:text-5xl	mb-1">
        Wedding Announcement
      </p>
      <p className="text-xs text-gray-400 mb-11">
        Original build by{" "}
        <span>
          <a
            className="cursor-pointer underline hover:text-black"
            href="https://www.linkedin.com/in/gemasaputera/"
            target="_blank"
            rel="noreferrer"
          >
            gemasaputera
          </a>
        </span>
      </p>
      <div>
        <img className="mb-3" src="/assets/flower-2.png" alt="" />
      </div>
    </div>
  );
}
