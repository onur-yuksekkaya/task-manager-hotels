import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundRoute() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl my-5 text-indigo-700">סּ_סּ</h1>
      <h2 className="text-3xl my-10 text-indigo-700">
        Aradığınız sayfayı bulamadım.
      </h2>
      <Link to="/" replace className="text-xl text-indigo-500 underline">
        Anasayfaya Dön &rarr;
      </Link>
    </div>
  );
}
