"use client";

import React from "react";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import WaterDropButton from "../animations/WaterDropButton";

const NewsInsights = () => {
  const newsArticles = [
    {
      id: 1,
      category: "PROPERTY",
      date: "Jun 30, 2025",
      title: "Every Space We Design Is Intentional And Built To Last.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      size: "small",
    },
    {
      id: 2,
      category: "MINIMAL",
      date: "Jun 30, 2025",
      title: "Every Home We Build Is Carefully Considered And Sturdy.",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
      size: "large",
    },
    {
      id: 3,
      category: "LUXURY",
      date: "Jun 30, 2025",
      title:
        "Every Brand We Build Is Precise, Intentional, And Built To Last.",
      image: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=800",
      size: "small",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
              News & Insights
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Get Every Single Company Updates Here.
            </h2>
          </div>
          <div className="w-full md:w-auto">
            <WaterDropButton
              hoverColor="white"
              className="w-full md:w-auto px-6 py-3 rounded-md font-medium text-center"
            >
              More News
            </WaterDropButton>
          </div>
        </div>


        {/* News Grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* First Article - Small */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                <Image
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  fill
                  className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:object-center"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-orange-500 font-medium uppercase tracking-wide">
                    {newsArticles[0].category}
                  </span>
                  <span className="text-gray-400">{newsArticles[0].date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                  {newsArticles[0].title}
                </h3>

                <div className="relative inline-block">
                  <span className="text-gray-600 text-sm font-medium cursor-pointer relative group/link">
                    Read More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 ease-out group-hover/link:w-full"></span>
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Second Article - Large */}
          <div className="col-span-12 md:col-span-12 lg:col-span-6">
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-80 lg:h-96">
                <Image
                  src={newsArticles[1].image}
                  alt={newsArticles[1].title}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-blue-500 font-medium uppercase tracking-wide">
                    {newsArticles[1].category}
                  </span>
                  <span className="text-gray-400">{newsArticles[1].date}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                  {newsArticles[1].title}
                </h3>

                <div className="relative inline-block">
                  <span className="text-gray-600 font-medium cursor-pointer relative group/link">
                    Read More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 ease-out group-hover/link:w-full"></span>
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Third Article - Small */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                <Image
                  src={newsArticles[2].image}
                  alt={newsArticles[2].title}
                  fill
                  className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:object-center"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-purple-500 font-medium uppercase tracking-wide">
                    {newsArticles[2].category}
                  </span>
                  <span className="text-gray-400">{newsArticles[2].date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                  {newsArticles[2].title}
                </h3>

                <div className="relative inline-block">
                  <span className="text-gray-600 text-sm font-medium cursor-pointer relative group/link">
                    Read More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 ease-out group-hover/link:w-full"></span>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Additional News Items */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Latest Update {item}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Stay informed with our recent developments
                  </p>
                  <div className="relative inline-block mt-2">
                    <span className="text-xs text-gray-500 cursor-pointer relative group/link">
                      Learn more
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 ease-out group-hover/link:w-full"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default NewsInsights;
