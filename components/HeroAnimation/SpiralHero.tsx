"use client";

import { useEffect, useMemo, useState } from "react";
import { RefObject } from "react";
import "./SpiralHero.css";

import {
  defaultSpiralHeroContent,
  SpiralHeroResponse,
} from "@/constants/spiralHeroContent";

import { fetchSpiralHeroContent } from "@/services/api";

type SpiralHeroProps = {
  scrollToRef: RefObject<HTMLDivElement>;
};

export default function SpiralHero({ scrollToRef }: SpiralHeroProps) {
  const [apiData, setApiData] = useState<SpiralHeroResponse | null>(null);

  const handleScrollDown = () => {
    scrollToRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchSpiralHeroContent();
        setApiData(data);
      } catch {
        console.warn("Hero API failed");
      }
    };

    loadContent();
  }, []);

  const content = useMemo(
    () => ({
      title: apiData?.title?.trim() || defaultSpiralHeroContent.title,
      subtitle: apiData?.subtitle?.trim() || defaultSpiralHeroContent.subtitle,
      scrollText:
        apiData?.scrollText?.trim() || defaultSpiralHeroContent.scrollText,
    }),
    [apiData],
  );

  return (
    <section className="spiral-hero-section">
      <div className="spiral-bg-layer">
        <div className="spiral-glow" />

        <svg
          viewBox="-600 0 2040 1067"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="spiral-svg"
        >
          <defs>
            <linearGradient
              id="g0"
              x1="1117.85"
              y1="669.318"
              x2="-452.075"
              y2="485.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g1"
              x1="1126.3"
              y1="660.47"
              x2="-441.402"
              y2="504.762"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g2"
              x1="1134.5"
              y1="651.522"
              x2="-430.481"
              y2="523.622"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g3"
              x1="1142.44"
              y1="642.468"
              x2="-419.335"
              y2="542.235"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g4"
              x1="1150.15"
              y1="633.336"
              x2="-407.925"
              y2="560.618"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g5"
              x1="1157.6"
              y1="624.103"
              x2="-396.3"
              y2="578.74"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g6"
              x1="1164.81"
              y1="614.802"
              x2="-384.437"
              y2="596.626"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g7"
              x1="1171.75"
              y1="605.409"
              x2="-372.359"
              y2="614.245"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g8"
              x1="1178.47"
              y1="595.959"
              x2="-360.046"
              y2="631.621"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g9"
              x1="1184.92"
              y1="586.435"
              x2="-347.528"
              y2="648.73"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g10"
              x1="1191.11"
              y1="576.85"
              x2="-334.815"
              y2="665.578"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g11"
              x1="1197.04"
              y1="567.208"
              x2="-321.908"
              y2="682.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g12"
              x1="1202.71"
              y1="557.52"
              x2="-308.801"
              y2="698.48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g13"
              x1="1208.13"
              y1="547.781"
              x2="-295.518"
              y2="714.525"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g14"
              x1="1213.29"
              y1="538.001"
              x2="-282.046"
              y2="730.297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g15"
              x1="1218.18"
              y1="528.202"
              x2="-268.409"
              y2="745.81"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g16"
              x1="1222.81"
              y1="518.356"
              x2="-254.616"
              y2="761.031"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g17"
              x1="1227.2"
              y1="508.485"
              x2="-240.639"
              y2="775.974"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g18"
              x1="1231.32"
              y1="498.616"
              x2="-226.51"
              y2="790.657"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g19"
              x1="1235.16"
              y1="488.711"
              x2="-212.261"
              y2="805.037"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g20"
              x1="1238.76"
              y1="478.814"
              x2="-197.848"
              y2="819.151"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g21"
              x1="1242.1"
              y1="468.898"
              x2="-183.297"
              y2="832.966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g22"
              x1="1245.16"
              y1="459.0"
              x2="-168.639"
              y2="846.511"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g23"
              x1="1247.98"
              y1="449.099"
              x2="-153.847"
              y2="859.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g24"
              x1="1250.54"
              y1="439.222"
              x2="-138.921"
              y2="872.733"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g25"
              x1="1252.84"
              y1="429.36"
              x2="-123.903"
              y2="885.415"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g26"
              x1="1254.86"
              y1="419.511"
              x2="-108.787"
              y2="897.799"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g27"
              x1="1256.64"
              y1="409.698"
              x2="-93.5673"
              y2="909.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g28"
              x1="1258.16"
              y1="399.926"
              x2="-78.2536"
              y2="921.721"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g29"
              x1="1259.42"
              y1="390.185"
              x2="-62.8633"
              y2="933.245"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g30"
              x1="1260.43"
              y1="380.496"
              x2="-47.3913"
              y2="944.485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g31"
              x1="1261.17"
              y1="370.859"
              x2="-31.8545"
              y2="955.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g32"
              x1="1261.69"
              y1="361.263"
              x2="-16.2241"
              y2="966.092"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g33"
              x1="1261.93"
              y1="351.745"
              x2="-0.564517"
              y2="976.472"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g34"
              x1="1261.95"
              y1="342.275"
              x2="15.1769"
              y2="986.548"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g35"
              x1="1261.7"
              y1="332.889"
              x2="30.9589"
              y2="996.349"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g36"
              x1="1261.2"
              y1="323.574"
              x2="46.764"
              y2="1005.86"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g37"
              x1="1260.46"
              y1="314.337"
              x2="62.6214"
              y2="1015.08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g38"
              x1="1259.47"
              y1="305.183"
              x2="78.4903"
              y2="1024.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g39"
              x1="1258.25"
              y1="296.12"
              x2="94.3997"
              y2="1032.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g40"
              x1="1256.79"
              y1="287.149"
              x2="110.324"
              y2="1041.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g41"
              x1="1255.09"
              y1="278.29"
              x2="126.263"
              y2="1049.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g42"
              x1="1253.14"
              y1="269.535"
              x2="142.197"
              y2="1056.94"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g43"
              x1="1250.98"
              y1="260.881"
              x2="158.14"
              y2="1064.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g44"
              x1="1248.56"
              y1="252.348"
              x2="174.061"
              y2="1071.72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g45"
              x1="1245.94"
              y1="243.922"
              x2="189.995"
              y2="1078.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g46"
              x1="1243.1"
              y1="235.623"
              x2="205.911"
              y2="1085.39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g47"
              x1="1240.01"
              y1="227.462"
              x2="221.783"
              y2="1091.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g48"
              x1="1236.73"
              y1="219.428"
              x2="237.664"
              y2="1097.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g49"
              x1="1233.23"
              y1="211.53"
              x2="253.498"
              y2="1103.89"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g50"
              x1="1229.48"
              y1="203.77"
              x2="269.268"
              y2="1109.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g51"
              x1="1225.55"
              y1="196.161"
              x2="285.019"
              y2="1114.88"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g52"
              x1="1221.39"
              y1="188.702"
              x2="300.704"
              y2="1119.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g53"
              x1="1217.05"
              y1="181.387"
              x2="316.352"
              y2="1124.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g54"
              x1="1212.5"
              y1="174.24"
              x2="331.938"
              y2="1129.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g55"
              x1="1207.75"
              y1="167.244"
              x2="347.462"
              y2="1133.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g56"
              x1="1202.82"
              y1="160.423"
              x2="362.923"
              y2="1137.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g57"
              x1="1197.7"
              y1="153.774"
              x2="378.32"
              y2="1141.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g58"
              x1="1192.36"
              y1="147.298"
              x2="393.604"
              y2="1145.3"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g59"
              x1="1186.86"
              y1="140.993"
              x2="408.823"
              y2="1148.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g60"
              x1="1181.17"
              y1="134.867"
              x2="423.959"
              y2="1151.78"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g61"
              x1="1175.3"
              y1="128.926"
              x2="438.989"
              y2="1154.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g62"
              x1="1169.29"
              y1="123.185"
              x2="453.959"
              y2="1157.33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g63"
              x1="1163.08"
              y1="117.622"
              x2="468.799"
              y2="1159.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g64"
              x1="1156.73"
              y1="112.27"
              x2="483.548"
              y2="1161.97"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g65"
              x1="1150.18"
              y1="107.103"
              x2="498.165"
              y2="1163.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g66"
              x1="1143.52"
              y1="102.137"
              x2="512.707"
              y2="1165.73"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g67"
              x1="1136.69"
              y1="97.3749"
              x2="527.109"
              y2="1167.28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g68"
              x1="1129.71"
              y1="92.8217"
              x2="541.397"
              y2="1168.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g69"
              x1="1122.59"
              y1="88.485"
              x2="555.562"
              y2="1169.78"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g70"
              x1="1115.32"
              y1="84.3609"
              x2="569.598"
              y2="1170.73"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g71"
              x1="1107.92"
              y1="80.4493"
              x2="583.496"
              y2="1171.48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g72"
              x1="1100.4"
              y1="76.7483"
              x2="597.273"
              y2="1172.03"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g73"
              x1="1092.75"
              y1="73.2774"
              x2="610.907"
              y2="1172.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g74"
              x1="1084.99"
              y1="70.0307"
              x2="624.406"
              y2="1172.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g75"
              x1="1077.11"
              y1="67.01"
              x2="637.764"
              y2="1172.59"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g76"
              x1="1069.11"
              y1="64.2132"
              x2="650.973"
              y2="1172.42"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g77"
              x1="1061.0"
              y1="61.6481"
              x2="664.02"
              y2="1172.07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g78"
              x1="1052.78"
              y1="59.3105"
              x2="676.906"
              y2="1171.55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g79"
              x1="1044.49"
              y1="57.2196"
              x2="689.671"
              y2="1170.89"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g80"
              x1="1036.1"
              y1="55.348"
              x2="702.263"
              y2="1170.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g81"
              x1="1027.62"
              y1="53.7344"
              x2="714.7"
              y2="1169.07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g82"
              x1="1019.05"
              y1="52.3471"
              x2="726.966"
              y2="1167.93"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g83"
              x1="1010.41"
              y1="51.2151"
              x2="739.065"
              y2="1166.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g84"
              x1="1001.7"
              y1="50.3068"
              x2="751.007"
              y2="1165.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g85"
              x1="992.91"
              y1="49.6451"
              x2="762.771"
              y2="1163.67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g86"
              x1="984.071"
              y1="49.2433"
              x2="774.375"
              y2="1161.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g87"
              x1="975.166"
              y1="49.0811"
              x2="785.798"
              y2="1160.18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g88"
              x1="966.22"
              y1="49.1698"
              x2="797.058"
              y2="1158.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g89"
              x1="957.228"
              y1="49.5067"
              x2="808.144"
              y2="1156.21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g90"
              x1="948.192"
              y1="50.0932"
              x2="819.05"
              y2="1154.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g91"
              x1="939.112"
              y1="50.9227"
              x2="829.773"
              y2="1151.78"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g92"
              x1="930.0"
              y1="52.0041"
              x2="840.315"
              y2="1149.41"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g93"
              x1="920.881"
              y1="53.3405"
              x2="850.695"
              y2="1146.94"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g94"
              x1="911.726"
              y1="54.9311"
              x2="860.88"
              y2="1144.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g95"
              x1="902.568"
              y1="56.7787"
              x2="870.895"
              y2="1141.74"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g96"
              x1="893.37"
              y1="58.8728"
              x2="880.699"
              y2="1139.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g97"
              x1="884.19"
              y1="61.2238"
              x2="890.342"
              y2="1136.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g98"
              x1="874.999"
              y1="63.8231"
              x2="899.789"
              y2="1133.32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <linearGradient
              id="g99"
              x1="865.814"
              y1="66.679"
              x2="909.054"
              y2="1130.37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A4432" />
              <stop offset="1" stopColor="#5EDCA8" />
            </linearGradient>
            <filter id="logoGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="spiralGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Black background — covers full extended viewBox */}
          <rect x="-600" y="-200" width="3000" height="2000" fill="black" />

          {/* Spiral paths */}
          <g filter="url(#spiralGlow)">
            <path
              className="sp sp0"
              opacity="0.01"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M944.664 610.253C983.161 797.49 1148.24 1010.88 1032.6 1162.82C920.436 1310.2 676.776 1173.32 494.602 1201.58C325.327 1227.85 173.78 1363.68 7.73271 1321.85C-169.554 1277.18 -318.56 1139.54 -401.714 975.761C-483.242 815.182 -486.635 621.844 -435.53 448.797C-389.343 292.408 -250.03 194.476 -136.553 77.9074C-27.3247 -34.2956 57.6296 -207.759 213.265 -217.667C369.185 -227.594 473.141 -63.8473 597.467 31.1749C691.104 102.741 787.848 166.588 848.604 267.921C910.979 371.955 920.188 491.213 944.664 610.253Z"
              stroke="url(#g0)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.02;0.011;0.02"
                dur="4.189s"
                begin="-0.0s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp1"
              opacity="0.02"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M952.685 604.623C994.308 790.536 1162.53 1000.31 1049.94 1153.73C940.72 1302.54 695.519 1170.38 514.465 1201.71C346.231 1230.83 197.571 1368.82 31.3682 1330.02C-146.084 1288.59 -296.971 1154.03 -382.687 992.267C-466.728 833.667 -473.473 641.063 -425.555 467.733C-382.249 311.087 -245.121 211.074 -134.063 92.9402C-27.1642 -20.77 54.4788 -195.104 209.404 -207.685C364.614 -220.288 471.061 -58.9213 596.611 33.6068C691.17 103.295 788.691 165.236 851 265.159C914.97 367.744 926.223 486.425 952.685 604.623Z"
              stroke="url(#g1)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.02;0.021;0.02"
                dur="4.189s"
                begin="-0.127s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp2"
              opacity="0.03"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M960.52 598.89C1005.23 783.427 1176.53 989.543 1066.99 1144.38C960.738 1294.57 714.087 1167.13 534.204 1201.51C367.059 1233.45 221.314 1373.54 55.0117 1337.77C-122.547 1299.57 -275.253 1168.1 -363.487 1008.4C-449.997 851.814 -460.07 660.003 -415.333 486.447C-374.902 329.598 -239.988 227.551 -131.37 107.9C-26.8199 -7.27008 51.5075 -182.412 205.678 -197.643C360.131 -212.901 469.017 -53.9517 595.743 36.0686C691.187 103.868 789.448 163.896 853.28 262.384C918.814 363.497 932.092 481.567 960.52 598.89Z"
              stroke="url(#g2)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.02;0.032;0.02"
                dur="4.189s"
                begin="-0.254s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp3"
              opacity="0.04"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M968.146 593.047C1015.91 776.157 1190.2 978.569 1083.73 1134.77C980.467 1286.28 732.455 1163.57 553.795 1200.96C387.786 1235.69 244.984 1377.83 78.6365 1345.07C-98.9707 1310.1 -253.434 1181.74 -344.139 1024.14C-433.073 869.611 -446.448 678.651 -404.886 504.927C-367.325 347.926 -234.654 243.893 -128.495 122.774C-26.3112 6.19045 48.6971 -169.698 202.067 -187.556C355.719 -205.447 466.992 -48.9498 594.844 38.5499C691.136 104.451 790.1 162.559 855.425 259.591C922.49 359.208 937.776 476.631 968.146 593.047Z"
              stroke="url(#g3)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.02;0.042;0.02"
                dur="4.189s"
                begin="-0.381s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp4"
              opacity="0.05"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M975.607 587.121C1026.39 768.754 1203.59 967.421 1100.22 1124.92C999.945 1277.69 750.662 1159.73 573.275 1200.09C408.448 1237.59 268.616 1381.71 102.278 1351.96C-75.319 1320.2 -231.477 1194.98 -324.609 1039.51C-415.921 887.077 -432.571 697.024 -394.176 523.191C-359.477 366.091 -229.078 260.117 -125.396 137.58C-25.596 19.6307 46.0913 -156.941 198.617 -177.404C351.422 -197.903 465.03 -43.8941 593.959 41.0732C691.062 105.067 790.693 161.249 857.477 256.802C926.042 354.902 943.318 471.644 975.607 587.121Z"
              stroke="url(#g4)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.02;0.053;0.02"
                dur="4.189s"
                begin="-0.508s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp5"
              opacity="0.06"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M982.86 581.087C1036.63 761.194 1216.67 956.075 1116.39 1114.81C1019.12 1268.79 768.661 1155.58 592.596 1198.88C428.997 1239.12 292.161 1385.16 125.887 1358.41C-51.6426 1329.84 -209.433 1207.79 -304.944 1054.49C-398.589 904.182 -418.487 715.091 -383.25 541.206C-351.405 384.059 -223.305 276.193 -122.117 152.286C-24.7173 33.0193 43.648 -144.174 195.285 -167.217C347.199 -190.301 463.09 -38.8134 593.046 43.6107C690.923 105.689 791.183 159.939 859.396 253.992C929.428 350.552 948.675 466.581 982.86 581.087Z"
              stroke="url(#g5)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.021;0.063;0.021"
                dur="4.189s"
                begin="-0.635s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp6"
              opacity="0.07"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M989.93 574.978C1046.64 753.509 1229.44 944.566 1132.27 1104.49C1038.03 1259.6 786.475 1151.16 611.78 1197.37C449.455 1240.3 315.638 1388.2 149.481 1364.44C-27.9222 1339.07 -187.283 1220.19 -285.125 1069.1C-381.057 920.952 -404.174 732.879 -372.085 558.999C-343.085 401.856 -217.311 292.145 -118.632 166.919C-23.6488 46.3816 41.3946 -131.371 192.099 -156.969C343.079 -182.614 461.199 -33.68 592.134 46.1909C690.748 106.346 791.599 158.66 861.21 251.192C932.676 346.191 953.873 461.473 989.93 574.978Z"
              stroke="url(#g6)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.025;0.074;0.025"
                dur="4.189s"
                begin="-0.762s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp7"
              opacity="0.08"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M996.798 568.769C1056.42 745.677 1241.89 932.874 1147.85 1093.91C1056.64 1250.12 804.08 1146.43 630.803 1195.52C469.796 1241.12 339.022 1390.82 173.036 1370.03C-4.18485 1347.84 -165.053 1232.16 -265.179 1083.3C-363.35 937.356 -389.657 750.355 -360.706 576.537C-334.541 419.45 -211.117 307.942 -114.964 181.446C-22.4107 59.6864 39.3123 -118.564 189.042 -146.692C339.045 -174.872 459.34 -28.5228 591.203 48.786C690.517 107.012 791.924 157.385 862.899 248.377C935.766 341.794 958.894 456.296 996.798 568.769Z"
              stroke="url(#g7)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.028;0.084;0.028"
                dur="4.189s"
                begin="-0.889s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp8"
              opacity="0.09"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1003.49 562.493C1065.98 737.732 1254.05 921.033 1163.15 1083.13C1074.97 1240.36 821.5 1141.44 649.688 1193.36C490.042 1241.61 362.333 1393.05 196.571 1375.22C19.589 1356.19 -142.723 1243.72 -245.086 1097.14C-345.448 953.42 -374.915 767.545 -349.089 593.845C-325.749 436.865 -204.7 323.61 -111.085 195.893C-20.9766 72.9593 37.4286 -105.727 186.14 -136.359C335.125 -167.047 457.54 -23.3139 590.283 51.4248C690.259 107.715 792.184 156.144 864.492 245.576C938.726 337.391 963.764 451.082 1003.49 562.493Z"
              stroke="url(#g8)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.032;0.095;0.032"
                dur="4.189s"
                begin="-1.015s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp9"
              opacity="0.1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1009.98 556.132C1075.29 729.656 1265.89 909.028 1178.13 1072.13C1093 1230.33 838.703 1136.17 668.402 1190.89C510.159 1241.74 385.537 1394.86 220.051 1379.98C43.3645 1364.09 -120.329 1254.85 -224.879 1110.58C-327.386 969.12 -359.981 784.426 -337.267 610.899C-316.739 454.076 -198.088 339.122 -107.026 210.235C-19.3745 86.1751 35.7163 -92.8863 183.369 -125.995C331.292 -159.164 455.775 -18.0762 589.347 54.0854C689.948 108.434 792.355 154.917 865.962 242.77C941.531 332.965 968.457 445.812 1009.98 556.132Z"
              stroke="url(#g9)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.035;0.105;0.035"
                dur="4.189s"
                begin="-1.142s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp10"
              opacity="0.11"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1016.26 549.7C1084.36 721.462 1277.4 896.873 1192.78 1060.91C1110.71 1220.02 855.681 1130.63 686.936 1188.12C530.14 1241.54 408.622 1396.27 243.465 1384.32C67.1299 1371.57 -97.8824 1265.57 -204.57 1123.63C-309.172 984.465 -344.864 801.002 -325.248 627.705C-307.52 471.09 -191.29 354.485 -102.793 224.478C-17.6096 99.34 34.1717 -80.0351 180.724 -115.593C327.546 -151.216 454.039 -12.8013 588.393 56.777C689.582 109.18 792.433 153.714 867.307 239.971C944.175 328.526 972.969 440.498 1016.26 549.7Z"
              stroke="url(#g10)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.038;0.116;0.038"
                dur="4.189s"
                begin="-1.269s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp11"
              opacity="0.12"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1022.34 543.197C1093.19 713.154 1288.59 884.573 1207.12 1049.49C1128.11 1209.46 872.433 1124.82 705.289 1185.04C549.98 1240.99 431.586 1397.28 266.811 1388.25C90.8813 1378.61 -75.3864 1275.86 -184.162 1136.29C-290.812 999.448 -329.566 817.269 -313.034 644.257C-298.093 487.899 -184.304 369.693 -98.383 238.617C-15.6793 112.449 32.7984 -67.1793 178.211 -105.158C323.889 -143.206 452.34 -7.49229 587.424 59.4975C689.164 109.951 792.424 152.535 868.53 237.178C946.665 324.076 977.303 435.143 1022.34 543.197Z"
              stroke="url(#g11)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.042;0.126;0.042"
                dur="4.189s"
                begin="-1.396s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp12"
              opacity="0.13"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1028.23 536.635C1101.77 704.744 1299.46 872.143 1221.15 1037.88C1145.2 1198.64 888.969 1118.76 723.469 1181.67C569.688 1240.12 454.435 1397.9 290.091 1391.77C114.623 1385.22 -52.8371 1285.74 -163.65 1148.57C-272.299 1014.08 -314.083 833.232 -300.618 660.56C-288.449 504.508 -177.122 384.752 -93.7871 252.655C-13.5727 125.506 31.6083 -54.3148 175.841 -94.6857C320.337 -135.13 450.688 -2.1426 586.455 62.2545C688.708 110.755 792.339 151.388 869.645 234.401C949.012 319.625 981.471 429.756 1028.23 536.635Z"
              stroke="url(#g12)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.045;0.137;0.045"
                dur="4.189s"
                begin="-1.523s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp13"
              opacity="0.14"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1033.9 530.008C1110.11 696.227 1309.99 859.578 1234.85 1026.08C1161.96 1187.57 905.264 1112.44 741.451 1178C589.238 1238.91 477.141 1398.12 313.28 1394.87C138.328 1391.4 -30.2616 1295.2 -143.063 1160.45C-253.66 1028.34 -298.438 848.88 -288.023 676.6C-278.611 520.905 -169.766 399.647 -89.0269 266.581C-11.311 138.498 30.5815 -41.4549 173.595 -84.1882C316.87 -127 449.065 3.23687 585.465 65.0379C688.195 111.584 792.161 150.266 870.633 231.631C951.197 315.165 985.455 424.331 1033.9 530.008Z"
              stroke="url(#g13)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.049;0.147;0.049"
                dur="4.189s"
                begin="-1.65s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp14"
              opacity="0.15"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1039.38 523.324C1118.2 687.61 1320.21 846.888 1248.23 1014.09C1178.42 1176.26 921.334 1105.87 759.25 1174.04C608.644 1237.38 499.718 1397.96 336.39 1397.57C162.007 1397.16 -7.64859 1304.23 -122.386 1171.94C-234.882 1042.24 -282.62 864.212 -275.238 692.38C-268.567 537.089 -162.221 414.379 -84.0857 280.394C-8.87624 151.426 29.7369 -28.599 171.493 -73.6646C313.508 -118.813 447.492 8.64898 584.475 67.8515C687.645 112.44 791.909 149.173 871.514 228.876C953.24 310.703 989.273 418.876 1039.38 523.324Z"
              stroke="url(#g14)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.052;0.158;0.052"
                dur="4.189s"
                begin="-1.777s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp15"
              opacity="0.16"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1044.65 516.604C1126.04 678.917 1330.09 834.097 1261.28 1001.94C1194.53 1164.73 937.156 1099.07 776.842 1169.81C627.881 1235.54 522.14 1397.43 359.395 1399.88C185.634 1402.51 14.9757 1312.87 -101.648 1183.06C-215.993 1055.79 -266.652 879.245 -262.284 707.914C-258.337 553.074 -154.509 428.964 -78.9847 294.11C-6.28879 164.305 29.0553 -15.733 169.516 -63.1C310.233 -110.554 445.95 14.1103 583.468 70.7129C687.04 113.343 791.566 148.127 872.269 226.154C955.123 306.26 992.906 413.409 1044.65 516.604Z"
              stroke="url(#g15)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.056;0.168;0.056"
                dur="4.189s"
                begin="-1.904s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp16"
              opacity="0.17"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1049.7 509.82C1133.62 670.122 1339.63 821.182 1273.98 989.601C1210.31 1152.96 952.722 1092.02 794.219 1165.29C646.94 1233.37 544.397 1396.5 382.284 1401.78C209.197 1407.42 37.5993 1321.08 -80.8581 1193.78C-197.001 1068.96 -250.546 893.946 -249.173 723.168C-247.931 568.828 -146.637 443.367 -73.7305 307.693C-3.55437 177.101 28.5319 -2.89143 167.66 -52.5284C307.043 -102.256 444.435 19.5887 582.439 73.5908C686.377 114.263 791.129 147.1 872.896 223.436C956.842 301.807 996.351 407.905 1049.7 509.82Z"
              stroke="url(#g16)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.059;0.179;0.059"
                dur="4.189s"
                begin="-2.031s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp17"
              opacity="0.18"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1054.57 502.993C1140.97 661.244 1348.86 808.163 1286.38 977.104C1225.77 1140.97 968.064 1084.74 811.411 1160.49C665.851 1230.88 566.516 1395.2 405.084 1403.28C232.725 1411.91 60.2496 1328.88 -59.9901 1204.1C-177.881 1081.77 -234.273 908.328 -235.873 738.155C-237.319 584.362 -138.574 457.6 -68.2907 321.158C-0.639694 189.826 28.2013 9.93835 165.961 -41.9366C303.973 -93.9065 442.983 25.099 581.424 76.5008C685.692 115.214 790.634 146.108 873.431 220.74C958.434 297.362 999.643 402.382 1054.57 502.993Z"
              stroke="url(#g17)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.063;0.189;0.063"
                dur="4.189s"
                begin="-2.158s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp18"
              opacity="0.19"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1059.23 496.147C1148.07 652.31 1357.75 795.069 1298.43 964.473C1240.9 1128.79 983.152 1077.25 828.387 1155.45C684.581 1228.11 588.464 1393.55 427.761 1404.41C256.181 1416 82.8918 1336.28 -39.0781 1214.06C-158.665 1094.23 -217.867 922.411 -222.419 752.894C-226.532 599.695 -130.35 471.684 -62.6951 334.523C2.42644 202.499 28.0355 22.7746 164.391 -31.3057C300.996 -85.4851 441.568 30.6618 580.398 79.4646C684.958 116.221 790.054 145.175 873.846 218.09C959.871 292.949 1002.76 396.864 1059.23 496.147Z"
              stroke="url(#g18)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.066;0.2;0.066"
                dur="4.189s"
                begin="-2.285s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp19"
              opacity="0.2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1063.66 489.246C1154.88 643.284 1366.28 781.865 1310.12 951.673C1255.65 1116.38 997.954 1069.51 845.115 1150.12C703.098 1225.01 610.209 1391.51 450.283 1405.13C279.532 1419.66 105.491 1343.25 -18.1565 1223.61C-139.388 1106.3 -201.36 936.153 -208.841 767.344C-215.602 614.785 -121.997 485.574 -56.9736 347.745C5.61496 215.077 28.0067 35.5735 162.923 -20.6791C298.087 -77.0346 440.163 36.2353 579.332 82.4414C684.148 117.242 789.364 144.259 874.116 215.446C961.127 288.531 1005.66 391.314 1063.66 489.246Z"
              stroke="url(#g19)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.07;0.21;0.07"
                dur="4.189s"
                begin="-2.412s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp20"
              opacity="0.21"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1067.9 482.332C1161.46 634.209 1374.49 768.595 1321.49 938.749C1270.09 1103.79 1012.52 1061.58 861.641 1144.55C721.447 1221.64 631.793 1389.13 472.691 1405.48C302.82 1422.93 128.091 1349.84 2.81781 1232.79C-120.008 1118.03 -184.708 949.589 -195.096 781.539C-204.484 629.665 -113.468 499.306 -51.0784 360.858C8.97462 227.594 28.1645 48.3692 161.608 -10.0219C295.296 -68.5199 438.819 41.8562 578.28 85.4686C683.316 118.315 788.614 143.401 874.292 212.849C962.254 284.147 1008.41 385.773 1067.9 482.332Z"
              stroke="url(#g20)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.073;0.221;0.073"
                dur="4.189s"
                begin="-2.539s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp21"
              opacity="0.22"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1071.93 475.376C1167.79 625.058 1382.37 755.236 1332.52 925.676C1284.17 1091 1026.82 1053.43 877.943 1138.71C739.605 1217.95 653.192 1386.38 494.96 1405.44C326.019 1425.78 150.663 1356 23.8178 1241.57C-100.549 1129.37 -167.939 962.688 -181.208 795.446C-193.201 644.302 -104.786 512.846 -45.0321 373.829C12.4838 240.018 28.4884 61.1277 160.425 0.632311C292.604 -59.9739 437.516 47.4926 577.221 88.5151C682.441 119.411 787.787 142.571 874.356 210.268C963.233 279.77 1010.99 380.213 1071.93 475.376Z"
              stroke="url(#g21)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.077;0.231;0.077"
                dur="4.189s"
                begin="-2.666s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp22"
              opacity="0.23"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1075.73 468.415C1173.84 615.868 1389.88 741.824 1343.18 912.493C1297.89 1078.03 1040.83 1045.09 893.988 1132.64C757.539 1213.99 674.372 1383.3 517.057 1405.03C349.093 1428.24 173.174 1361.77 44.8094 1249.98C-81.0473 1140.37 -151.084 975.48 -167.211 809.095C-181.785 658.726 -95.9812 526.224 -38.8644 386.687C16.1136 252.376 28.9505 73.8777 159.348 11.3127C289.985 -51.3668 436.228 53.1751 576.13 91.6127C681.497 120.562 786.856 141.802 874.281 207.739C964.037 275.433 1013.36 374.669 1075.73 468.415Z"
              stroke="url(#g22)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.081;0.242;0.081"
                dur="4.189s"
                begin="-2.793s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp23"
              opacity="0.24"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1079.34 461.428C1179.64 606.619 1397.07 728.341 1353.51 899.182C1311.26 1064.89 1054.59 1036.54 909.808 1126.32C775.279 1209.74 695.363 1379.86 539.009 1404.25C372.072 1430.29 195.651 1367.13 65.8201 1257.99C-61.474 1150.99 -134.115 987.939 -153.073 822.46C-170.206 672.909 -87.0235 539.412 -32.5432 399.406C19.897 264.643 29.5847 86.5912 158.411 21.9919C287.474 -42.7257 434.991 58.8781 575.041 94.7364C680.52 121.743 785.857 141.07 874.104 205.237C964.703 271.115 1015.57 369.119 1079.34 461.428Z"
              stroke="url(#g23)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.084;0.252;0.084"
                dur="4.189s"
                begin="-2.919s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp24"
              opacity="0.25"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1082.75 454.44C1185.2 597.338 1403.94 714.817 1363.51 885.772C1324.29 1051.59 1068.08 1027.82 925.403 1119.77C792.825 1205.22 716.162 1376.09 560.814 1403.11C394.952 1431.96 218.09 1372.11 86.8467 1265.64C-41.8325 1161.25 -117.036 1000.09 -138.799 835.56C-158.466 686.872 -77.9127 552.43 -26.0678 412.004C23.8356 276.836 30.3936 99.2873 157.618 32.6894C285.075 -34.0306 433.808 64.6227 573.96 97.9082C679.515 122.977 784.796 140.397 873.829 202.787C965.234 266.839 1017.61 363.589 1082.75 454.44Z"
              stroke="url(#g24)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.087;0.263;0.087"
                dur="4.189s"
                begin="-3.046s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp25"
              opacity="0.26"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1085.93 447.44C1190.48 588.015 1410.44 701.242 1373.14 872.254C1336.95 1038.13 1081.28 1018.9 940.734 1113C810.136 1200.43 736.728 1371.98 582.431 1401.61C417.69 1433.24 240.449 1376.69 107.847 1272.91C-22.1647 1171.15 -99.8874 1011.9 -124.427 848.381C-146.604 700.597 -68.6874 565.262 -19.4761 424.464C27.8924 288.939 31.3414 111.948 156.933 43.3876C282.755 -25.2984 432.646 70.3929 572.851 101.113C678.448 124.25 783.638 139.772 873.422 200.376C965.598 262.595 1019.46 358.067 1085.93 447.44Z"
              stroke="url(#g25)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.091;0.273;0.091"
                dur="4.189s"
                begin="-3.173s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp26"
              opacity="0.27"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1088.9 440.428C1195.5 578.649 1416.6 687.618 1382.41 858.63C1349.24 1024.5 1094.2 1009.8 955.809 1105.99C827.22 1195.36 757.068 1367.54 603.864 1399.74C440.291 1434.11 262.733 1380.87 128.825 1279.79C-2.46674 1180.68 -82.6643 1023.39 -109.953 860.914C-134.614 714.077 -59.3405 577.899 -12.7598 436.78C32.0767 300.945 32.4379 124.565 156.367 54.0789C280.524 -16.5364 431.515 76.1827 571.728 104.346C677.33 125.557 782.395 139.189 872.895 198C965.807 258.379 1021.12 352.551 1088.9 440.428Z"
              stroke="url(#g26)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.095;0.284;0.095"
                dur="4.189s"
                begin="-3.3s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp27"
              opacity="0.28"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1091.66 433.424C1200.27 569.263 1422.43 673.969 1391.33 844.925C1361.17 1010.74 1106.83 1000.54 970.637 1098.76C844.084 1190.04 777.187 1362.78 625.12 1397.52C462.759 1434.62 284.945 1384.66 149.786 1286.3C17.2668 1189.86 -65.3612 1034.56 -95.369 873.177C-122.488 727.329 -49.8639 590.36 -5.90992 448.967C36.3981 312.868 33.6941 137.154 155.933 64.7794C278.395 -7.72817 430.428 82.0095 570.602 107.625C676.176 126.917 781.081 138.668 872.262 195.68C965.873 254.211 1022.62 347.062 1091.66 433.424Z"
              stroke="url(#g27)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.098;0.294;0.098"
                dur="4.189s"
                begin="-3.427s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp28"
              opacity="0.29"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1094.22 426.433C1204.77 559.863 1427.91 660.3 1399.9 831.145C1372.74 996.856 1119.19 991.116 985.21 1091.34C860.721 1184.46 797.077 1357.71 646.188 1394.97C485.085 1434.75 307.075 1388.08 170.718 1292.45C37.0245 1198.68 -47.9887 1045.41 -80.6864 885.169C-110.237 740.351 -40.2658 602.64 1.06604 461.022C40.8501 324.707 35.1042 149.712 155.624 75.4854C276.364 1.12318 429.381 87.8715 569.471 110.949C674.98 128.329 779.693 138.21 871.52 193.416C965.794 250.094 1023.94 341.603 1094.22 426.433Z"
              stroke="url(#g28)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.101;0.304;0.101"
                dur="4.189s"
                begin="-3.554s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp29"
              opacity="0.3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1096.56 419.445C1209.01 550.438 1433.05 646.606 1408.11 817.284C1383.93 982.832 1131.24 981.528 999.512 1083.7C877.113 1178.63 816.72 1352.33 667.05 1392.07C507.249 1434.5 329.104 1391.11 191.603 1298.21C56.788 1207.13 -30.5648 1055.93 -65.9217 896.875C-97.8752 753.126 -30.5617 614.725 8.15365 472.931C45.4192 336.446 36.6555 162.222 155.429 86.1818C274.419 10.0028 428.363 93.7547 568.322 114.305C673.733 129.782 778.221 137.802 870.658 191.198C965.559 246.018 1025.07 336.163 1096.56 419.445Z"
              stroke="url(#g29)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.105;0.315;0.105"
                dur="4.189s"
                begin="-3.681s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp30"
              opacity="0.31"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1098.7 412.478C1212.99 541.01 1437.85 632.908 1415.97 803.363C1394.75 968.695 1143 971.795 1013.55 1075.86C893.268 1172.57 836.122 1346.64 687.712 1388.84C529.257 1433.88 351.036 1393.76 212.445 1303.62C76.5612 1215.24 -13.0851 1066.14 -51.0699 908.309C-85.3983 765.669 -20.7447 626.629 15.3605 484.706C50.1138 348.098 38.3576 174.696 155.358 96.8809C272.572 18.9235 427.384 99.6733 567.168 117.708C672.446 131.291 776.676 137.46 869.688 189.042C965.18 241.999 1026.03 330.761 1098.7 412.478Z"
              stroke="url(#g30)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.108;0.326;0.108"
                dur="4.189s"
                begin="-3.808s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp31"
              opacity="0.32"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1100.62 405.534C1216.71 531.579 1442.3 619.208 1423.47 789.386C1405.2 954.45 1154.47 961.92 1027.32 1067.84C909.172 1166.26 855.267 1340.66 708.157 1385.28C551.089 1432.91 372.853 1396.05 233.226 1308.66C96.3265 1222.99 4.43344 1076.03 -36.1473 919.467C-72.8217 777.976 -10.8299 638.346 22.6727 496.343C54.9207 359.657 40.198 187.129 155.4 107.577C270.812 27.8803 426.435 105.623 565.998 121.155C671.11 132.852 775.048 137.183 868.601 186.947C964.648 238.037 1026.81 325.397 1100.62 405.534Z"
              stroke="url(#g31)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.112;0.336;0.112"
                dur="4.189s"
                begin="-3.935s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp32"
              opacity="0.33"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1102.35 398.599C1220.19 522.135 1446.44 605.497 1430.63 775.344C1415.3 940.086 1165.66 951.893 1040.84 1059.62C924.854 1159.72 874.185 1334.38 728.414 1381.38C572.775 1431.56 394.582 1397.95 253.973 1313.33C116.112 1230.37 22.0189 1085.58 -21.125 930.333C-60.1159 790.028 -0.786567 649.86 30.1215 507.823C59.8722 371.105 42.2099 199.502 155.588 118.253C269.174 36.8548 425.55 111.587 564.847 124.629C669.759 134.451 773.374 136.956 867.433 184.898C963.998 234.118 1027.44 320.058 1102.35 398.599Z"
              stroke="url(#g32)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.115;0.347;0.115"
                dur="4.189s"
                begin="-4.062s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp33"
              opacity="0.34"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1103.85 391.71C1223.38 512.715 1450.21 591.814 1437.41 761.275C1425 925.645 1176.52 941.752 1054.05 1051.23C940.253 1152.96 892.811 1327.83 748.418 1377.18C594.25 1429.88 416.159 1399.5 274.623 1317.66C135.851 1237.42 39.6061 1094.83 -6.06753 940.938C-47.3447 801.857 9.32227 661.201 37.6449 519.178C64.907 382.473 44.3329 211.844 155.864 128.937C267.599 45.8776 424.671 117.597 563.658 128.163C668.337 136.12 771.596 136.811 866.125 182.93C963.173 230.277 1027.86 314.778 1103.85 391.71Z"
              stroke="url(#g33)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.119;0.357;0.119"
                dur="4.189s"
                begin="-4.189s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp34"
              opacity="0.35"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1105.17 384.837C1226.34 503.289 1453.66 578.13 1443.86 747.153C1434.35 911.098 1187.11 931.469 1067.02 1042.65C955.423 1145.97 911.201 1320.98 768.223 1372.66C615.566 1427.83 437.636 1400.67 295.225 1321.61C155.596 1244.11 57.2475 1103.75 9.07815 951.248C-34.4544 813.428 19.5512 672.334 45.2984 530.371C70.0814 393.725 46.6241 224.119 156.285 139.594C266.146 54.9129 423.856 123.618 562.489 131.722C666.902 137.826 769.774 136.717 864.739 181.01C962.234 226.483 1028.14 309.528 1105.17 384.837Z"
              stroke="url(#g34)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.122;0.367;0.122"
                dur="4.189s"
                begin="-4.316s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp35"
              opacity="0.36"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1106.28 378.013C1229.03 493.892 1456.77 564.483 1449.94 733.016C1443.31 896.485 1197.39 921.08 1079.69 1033.92C970.326 1138.77 929.314 1313.87 787.787 1367.83C636.681 1425.45 458.969 1401.49 315.738 1325.23C175.305 1250.45 74.9011 1112.36 24.2709 961.293C-21.4857 824.77 29.8607 683.288 53.0431 541.433C75.3575 404.889 49.0463 236.356 156.814 150.251C264.779 63.9893 423.07 129.68 561.307 135.339C665.42 139.601 767.874 136.704 863.239 179.17C961.146 222.768 1028.24 304.341 1106.28 378.013Z"
              stroke="url(#g35)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.126;0.378;0.126"
                dur="4.189s"
                begin="-4.443s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp36"
              opacity="0.37"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1107.16 371.228C1231.45 484.515 1459.53 550.862 1455.65 718.853C1451.89 881.795 1207.35 910.576 1092.07 1025.02C984.946 1131.37 947.134 1306.49 807.095 1362.71C657.577 1422.73 480.142 1401.96 336.144 1328.49C194.96 1256.45 92.5493 1120.65 39.4934 971.058C-8.45526 835.868 40.2348 694.047 60.8642 552.345C80.721 415.949 51.5863 248.535 157.439 160.892C263.486 73.0887 422.302 135.765 560.098 138.995C663.88 141.427 765.885 136.758 861.616 177.397C959.898 219.119 1028.14 299.204 1107.16 371.228Z"
              stroke="url(#g36)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.13;0.389;0.13"
                dur="4.189s"
                begin="-4.57s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp37"
              opacity="0.38"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1107.86 364.485C1233.62 475.161 1461.96 537.276 1461.02 704.672C1460.1 867.039 1217.02 899.964 1104.17 1015.97C999.315 1123.76 964.691 1298.85 826.176 1357.29C678.285 1419.68 501.182 1402.08 356.472 1331.4C214.589 1262.11 110.22 1128.62 54.775 980.543C4.66673 846.72 50.7044 704.61 68.7931 563.107C86.2045 426.903 54.2772 260.656 158.195 171.515C262.303 82.2108 421.586 141.875 558.9 142.692C662.318 143.308 763.843 136.882 859.906 175.693C958.528 215.539 1027.9 294.12 1107.86 364.485Z"
              stroke="url(#g37)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.133;0.399;0.133"
                dur="4.189s"
                begin="-4.697s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp38"
              opacity="0.39"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1108.33 357.79C1235.53 465.839 1464.05 523.732 1466.01 690.483C1467.91 852.224 1226.36 889.252 1115.97 1006.76C1013.4 1115.95 981.947 1290.95 844.989 1351.57C698.761 1416.29 522.048 1401.84 376.679 1333.97C234.149 1267.42 127.874 1136.28 70.0752 989.75C17.8404 857.329 61.2305 714.979 76.7917 573.72C91.7703 437.751 57.0823 272.717 159.045 182.119C261.194 91.355 420.888 148.01 557.677 146.433C660.7 145.246 761.716 137.077 858.075 174.062C957.002 212.033 1027.46 289.096 1108.33 357.79Z"
              stroke="url(#g38)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.136;0.41;0.136"
                dur="4.189s"
                begin="-4.823s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp39"
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1108.62 351.15C1237.19 456.555 1465.82 510.24 1470.66 676.295C1475.37 837.361 1235.41 878.449 1127.49 997.416C1027.22 1107.96 998.931 1282.81 863.565 1345.58C719.037 1412.58 542.769 1401.27 396.794 1336.2C253.671 1272.39 145.537 1143.62 85.4229 998.683C31.0953 867.697 71.8434 725.156 84.8913 584.186C97.4506 448.496 60.0345 284.72 160.023 192.706C260.194 100.523 420.242 154.172 556.465 150.22C659.062 147.243 759.538 137.348 856.159 172.509C955.356 208.606 1026.88 284.136 1108.62 351.15Z"
              stroke="url(#g39)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.14;0.42;0.14"
                dur="4.189s"
                begin="-4.95s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp40"
              opacity="0.41"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1108.7 344.566C1238.59 447.313 1467.25 496.803 1474.96 662.113C1482.44 822.456 1244.14 867.559 1138.72 987.932C1040.76 1099.78 1015.62 1274.43 881.88 1339.3C739.086 1408.56 563.318 1400.36 416.791 1338.09C273.127 1277.03 163.186 1150.65 100.793 1007.34C44.4068 877.822 82.5196 735.138 93.0689 594.502C103.223 459.133 63.1124 296.661 161.108 203.272C259.283 109.712 419.629 160.36 555.245 154.051C657.385 149.3 757.291 137.694 854.141 171.032C953.572 205.259 1026.12 279.243 1108.7 344.566Z"
              stroke="url(#g40)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.143;0.43;0.143"
                dur="4.189s"
                begin="-5.077s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp41"
              opacity="0.42"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1108.59 338.056C1239.75 438.131 1468.35 483.441 1478.9 647.957C1489.14 807.529 1252.57 856.602 1149.65 978.33C1054.03 1091.44 1032.02 1265.83 899.932 1332.77C758.907 1404.24 583.695 1399.13 436.669 1339.66C292.515 1281.35 180.817 1157.39 116.185 1015.74C57.7739 887.716 93.2588 744.938 101.325 604.68C109.09 469.675 66.3181 308.55 162.304 213.828C258.465 118.931 419.054 166.585 554.022 157.94C655.674 151.429 754.982 138.129 852.026 169.648C951.656 202.007 1025.2 274.432 1108.59 338.056Z"
              stroke="url(#g41)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.147;0.441;0.147"
                dur="4.189s"
                begin="-5.204s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp42"
              opacity="0.43"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1108.27 331.613C1240.64 429.003 1469.12 470.15 1482.48 633.823C1495.45 792.577 1260.67 845.573 1160.28 968.606C1067 1082.93 1048.1 1257 917.705 1325.97C778.483 1399.61 603.881 1397.58 456.408 1340.9C311.817 1285.34 198.412 1163.82 131.579 1023.86C71.1794 897.369 104.045 754.546 109.645 614.71C115.035 480.11 69.6376 320.376 163.597 224.362C257.728 128.171 418.504 172.837 552.784 161.876C653.917 153.621 752.599 138.645 849.803 168.348C949.598 198.842 1024.11 269.696 1108.27 331.613Z"
              stroke="url(#g42)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.15;0.452;0.15"
                dur="4.189s"
                begin="-5.331s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp43"
              opacity="0.44"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1107.76 325.233C1241.29 419.925 1469.57 456.929 1485.72 619.71C1501.39 777.601 1268.47 834.472 1170.62 958.758C1079.69 1074.24 1063.89 1247.95 935.215 1318.91C797.828 1394.68 623.889 1395.7 476.023 1341.82C331.046 1288.99 215.986 1169.94 146.991 1031.7C84.6379 906.775 114.893 763.954 118.044 624.582C121.077 490.43 73.0884 332.129 165.005 234.864C257.09 137.421 417.998 179.108 551.55 165.852C652.136 155.869 750.163 139.235 847.494 167.125C947.418 195.758 1022.86 265.03 1107.76 325.233Z"
              stroke="url(#g43)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.154;0.462;0.154"
                dur="4.189s"
                begin="-5.458s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp44"
              opacity="0.45"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1107.03 318.934C1241.67 410.919 1469.68 443.797 1488.59 605.641C1506.93 762.621 1275.94 823.32 1180.63 948.808C1092.08 1065.41 1079.36 1238.69 952.43 1311.61C816.909 1389.46 643.687 1393.5 495.48 1342.42C350.168 1292.33 233.505 1175.76 162.388 1039.29C98.1171 915.947 125.772 773.176 126.492 634.312C127.184 500.648 76.6414 343.821 166.501 245.348C256.525 146.694 417.51 185.411 550.296 169.883C650.304 158.188 747.648 139.914 845.072 165.997C945.092 192.775 1021.43 260.453 1107.03 318.934Z"
              stroke="url(#g44)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.158;0.473;0.158"
                dur="4.189s"
                begin="-5.585s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp45"
              opacity="0.46"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1106.14 312.703C1241.84 401.971 1469.49 430.745 1491.14 591.604C1512.13 747.629 1283.12 812.105 1190.38 938.745C1104.2 1056.42 1094.54 1229.22 969.388 1304.05C835.765 1383.95 663.311 1390.99 514.815 1342.69C369.221 1295.34 251.005 1181.28 177.807 1046.59C111.655 924.87 136.721 782.195 135.027 643.88C133.397 510.746 80.3371 355.434 168.125 255.795C256.074 155.973 417.082 191.729 549.063 173.952C648.464 160.562 745.099 140.667 842.583 164.947C942.664 189.875 1019.87 255.95 1106.14 312.703Z"
              stroke="url(#g45)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.161;0.483;0.161"
                dur="4.189s"
                begin="-5.712s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp46"
              opacity="0.47"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1105.05 306.559C1241.75 393.101 1468.98 417.793 1493.33 577.622C1516.95 732.647 1289.98 800.849 1199.81 928.59C1116.03 1047.29 1109.4 1219.55 986.058 1296.26C854.363 1378.16 682.729 1388.18 533.997 1342.66C388.17 1298.04 268.453 1186.49 193.215 1053.63C125.218 933.558 147.707 791.026 143.62 653.303C139.687 520.738 84.1464 366.982 169.85 266.218C255.711 165.27 416.686 198.077 547.824 178.073C646.591 163.007 742.49 141.51 840 163.994C940.108 187.077 1018.15 251.539 1105.05 306.559Z"
              stroke="url(#g46)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.164;0.493;0.164"
                dur="4.189s"
                begin="-5.839s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp47"
              opacity="0.48"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1103.76 300.513C1241.4 384.321 1468.13 404.956 1495.16 563.708C1521.37 717.691 1296.51 789.567 1208.92 918.357C1127.54 1038.03 1123.93 1209.71 1002.42 1288.25C872.678 1372.11 701.916 1385.08 552.999 1342.34C406.99 1300.43 285.825 1191.43 208.587 1060.42C138.784 942.02 158.708 799.678 152.248 662.588C146.03 530.631 88.0473 378.47 171.654 276.624C255.414 174.593 416.305 204.462 546.562 182.256C644.666 165.531 739.801 142.451 837.305 163.145C937.407 184.391 1016.25 247.231 1103.76 300.513Z"
              stroke="url(#g47)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.168;0.504;0.168"
                dur="4.189s"
                begin="-5.966s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp48"
              opacity="0.49"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1102.31 294.554C1240.84 375.622 1467.01 392.223 1496.67 549.855C1525.45 702.751 1302.76 778.249 1217.76 908.038C1138.79 1028.64 1138.17 1199.68 1018.52 1280.02C890.765 1365.79 720.925 1381.68 571.874 1341.71C425.735 1302.52 303.173 1196.07 223.977 1066.94C152.404 950.242 169.777 808.135 160.965 671.718C152.483 540.41 92.0966 389.881 173.595 286.996C255.243 183.923 415.994 210.868 545.335 186.484C642.748 168.12 737.095 143.477 834.559 162.388C934.621 181.803 1014.23 243.013 1102.31 294.554Z"
              stroke="url(#g48)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.171;0.514;0.171"
                dur="4.189s"
                begin="-6.093s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp49"
              opacity="0.5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1100.66 288.688C1240.03 367.01 1465.56 379.604 1497.84 536.072C1529.15 687.839 1308.68 766.906 1226.28 897.642C1149.72 1019.12 1152.08 1189.47 1034.31 1271.56C908.568 1359.21 739.701 1377.99 590.567 1340.78C444.347 1304.29 320.44 1200.42 239.328 1073.2C166.024 958.227 180.86 816.401 169.717 680.698C158.991 550.077 96.241 401.217 175.62 297.336C255.145 193.264 415.705 217.299 544.092 190.762C640.788 170.777 734.32 144.592 831.713 161.728C931.702 179.321 1012.05 238.893 1100.66 288.688Z"
              stroke="url(#g49)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.175;0.525;0.175"
                dur="4.189s"
                begin="-6.22s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp50"
              opacity="0.51"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1098.8 282.919C1238.95 358.491 1463.77 367.105 1498.63 522.367C1532.45 672.963 1314.26 755.544 1234.47 887.176C1160.33 1009.49 1165.64 1179.09 1049.78 1262.9C926.072 1352.38 758.225 1374.02 609.06 1339.56C462.808 1305.77 337.61 1204.48 254.624 1079.2C179.627 965.977 191.941 824.477 178.49 689.527C165.542 559.631 100.467 412.478 177.717 307.642C255.109 202.614 415.425 223.754 542.824 195.091C638.774 173.503 731.467 145.798 828.757 161.167C928.639 176.946 1009.69 234.872 1098.8 282.919Z"
              stroke="url(#g50)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.178;0.536;0.178"
                dur="4.189s"
                begin="-6.347s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp51"
              opacity="0.52"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1096.78 277.259C1237.67 350.078 1461.71 354.741 1499.12 508.753C1535.41 658.137 1319.55 744.177 1242.38 876.654C1170.67 999.751 1178.89 1168.56 1064.96 1254.04C943.323 1345.3 776.545 1369.78 627.398 1338.06C481.165 1306.96 354.726 1208.27 269.91 1084.95C193.258 973.501 203.067 832.372 187.33 698.215C172.182 569.081 104.823 423.67 179.935 317.922C255.184 211.981 415.205 230.24 541.58 199.477C636.759 176.308 728.588 147.103 825.743 160.714C925.486 174.688 1007.21 230.963 1096.78 277.259Z"
              stroke="url(#g51)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.182;0.546;0.182"
                dur="4.189s"
                begin="-6.474s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp52"
              opacity="0.53"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1094.56 271.706C1236.13 341.769 1459.32 342.511 1499.25 495.232C1537.98 643.364 1324.51 732.806 1249.95 866.078C1180.68 989.913 1191.8 1157.88 1079.82 1244.99C960.273 1337.99 794.612 1365.27 645.533 1336.28C499.367 1307.85 371.742 1211.78 285.138 1090.45C206.871 980.794 214.19 840.08 196.191 706.754C178.866 578.42 109.264 434.786 182.229 328.169C255.329 221.356 415.002 236.753 540.318 203.917C634.701 179.186 725.642 148.502 822.63 160.365C922.202 172.544 1004.56 227.162 1094.56 271.706Z"
              stroke="url(#g52)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.185;0.557;0.185"
                dur="4.189s"
                begin="-6.601s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp53"
              opacity="0.54"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1092.18 266.254C1234.38 333.559 1456.65 330.41 1499.06 481.8C1540.2 628.641 1329.17 721.428 1257.24 855.443C1190.4 979.969 1204.39 1147.04 1094.39 1235.74C976.954 1330.44 812.457 1360.49 663.497 1334.21C517.447 1308.45 388.686 1215 300.338 1095.68C220.495 987.849 225.343 847.593 205.106 715.136C185.626 587.638 113.822 445.814 184.634 338.37C255.576 230.73 414.851 243.282 539.076 208.4C632.636 182.128 722.666 149.988 819.455 160.112C918.823 170.506 1001.78 223.463 1092.18 266.254Z"
              stroke="url(#g53)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.189;0.567;0.189"
                dur="4.189s"
                begin="-6.727s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp54"
              opacity="0.55"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1089.63 260.928C1232.4 325.475 1453.69 318.468 1498.55 468.487C1542.06 613.997 1333.52 710.072 1264.22 844.779C1199.82 969.948 1216.64 1136.08 1108.65 1226.32C993.343 1322.67 830.055 1355.46 681.263 1331.89C535.377 1308.78 405.534 1217.96 315.486 1100.68C234.106 994.688 236.501 854.934 214.05 723.383C192.44 596.758 118.477 456.777 187.129 348.549C255.906 240.123 414.733 249.848 537.832 212.948C630.545 185.157 719.641 151.584 816.2 159.98C915.333 168.599 998.865 219.89 1089.63 260.928Z"
              stroke="url(#g54)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.193;0.578;0.193"
                dur="4.189s"
                begin="-6.854s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp55"
              opacity="0.56"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1086.9 255.707C1230.19 317.498 1450.43 306.666 1497.7 455.274C1543.56 599.416 1337.56 698.72 1270.89 834.069C1208.93 959.835 1228.57 1124.98 1122.59 1216.72C1009.44 1314.67 847.407 1350.17 698.831 1329.29C553.158 1308.81 422.285 1220.64 330.581 1105.42C247.704 1001.29 247.664 862.08 223.026 731.472C199.31 605.754 123.229 467.649 189.715 358.679C256.323 249.51 414.65 256.429 536.593 217.539C628.434 188.25 716.573 153.266 812.872 159.945C911.738 166.802 995.809 216.423 1086.9 255.707Z"
              stroke="url(#g55)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.196;0.588;0.196"
                dur="4.189s"
                begin="-6.981s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp56"
              opacity="0.57"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1084.01 250.619C1227.77 309.653 1446.89 295.032 1496.54 442.19C1544.7 584.927 1341.3 687.4 1277.25 823.341C1217.74 949.656 1240.16 1113.76 1136.22 1206.96C1025.25 1306.47 864.513 1344.64 716.201 1326.44C570.787 1308.59 438.937 1223.06 345.621 1109.92C261.288 1007.68 258.833 869.054 232.034 739.425C206.237 614.65 128.081 478.451 192.396 368.782C256.829 258.913 414.609 263.045 535.362 222.196C626.307 191.43 713.468 155.058 809.476 160.032C908.044 165.138 992.621 213.086 1084.01 250.619Z"
              stroke="url(#g56)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.199;0.598;0.199"
                dur="4.189s"
                begin="-7.108s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp57"
              opacity="0.58"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1080.96 245.657C1225.13 301.939 1443.07 283.563 1495.07 429.235C1545.5 570.53 1344.74 676.112 1283.32 812.594C1226.25 939.412 1251.42 1102.43 1149.54 1197.05C1040.76 1298.07 881.371 1338.88 733.372 1323.33C588.265 1308.09 455.489 1225.22 360.607 1114.19C274.857 1013.84 270.008 875.851 241.073 747.236C213.222 623.437 133.035 489.175 195.175 378.85C257.429 268.323 414.611 269.689 534.144 226.91C624.171 194.69 710.331 156.954 806.019 160.235C904.257 163.603 989.307 209.875 1080.96 245.657Z"
              stroke="url(#g57)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.203;0.609;0.203"
                dur="4.189s"
                begin="-7.235s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp58"
              opacity="0.59"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1077.72 240.825C1222.24 294.358 1438.94 272.264 1493.24 416.413C1545.91 556.23 1347.83 664.861 1289.04 801.833C1234.42 929.107 1262.31 1091 1162.5 1186.99C1055.94 1289.48 897.934 1332.89 750.296 1319.99C605.542 1307.34 471.894 1227.13 375.489 1118.22C288.364 1019.79 281.142 882.47 250.099 754.904C220.219 632.116 138.044 499.819 198.006 388.88C258.078 277.737 414.615 276.36 532.897 231.681C621.982 198.03 707.12 158.953 802.458 160.554C900.337 162.197 985.828 206.791 1077.72 240.825Z"
              stroke="url(#g58)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.206;0.619;0.206"
                dur="4.189s"
                begin="-7.362s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp59"
              opacity="0.6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1074.32 236.119C1219.16 286.906 1434.55 261.133 1491.11 403.722C1545.98 542.027 1350.64 653.645 1294.48 791.058C1242.29 918.742 1272.87 1079.46 1175.16 1176.78C1070.83 1280.69 914.251 1326.66 767.02 1316.39C622.665 1306.31 488.197 1228.78 390.315 1122.01C301.855 1025.52 292.282 888.904 259.159 762.422C227.277 640.677 143.158 510.375 200.94 398.864C258.827 287.148 414.671 283.051 531.673 236.501C619.793 201.442 703.89 161.049 798.848 160.983C896.337 160.914 982.236 203.83 1074.32 236.119Z"
              stroke="url(#g59)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.21;0.63;0.21"
                dur="4.189s"
                begin="-7.489s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp60"
              opacity="0.61"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1070.77 231.545C1215.87 279.593 1429.89 250.179 1488.68 391.174C1545.72 527.933 1353.15 642.475 1299.61 780.28C1249.86 908.327 1283.1 1067.82 1187.49 1166.43C1085.41 1271.71 930.306 1320.22 783.528 1312.55C639.618 1305.03 504.383 1230.17 405.069 1125.56C315.315 1031.02 303.413 895.161 268.238 769.796C234.381 649.126 148.363 520.846 203.962 408.805C259.663 296.558 414.768 289.765 530.46 241.376C617.594 204.932 700.629 163.248 795.179 161.528C892.248 159.761 978.523 200.998 1070.77 231.545Z"
              stroke="url(#g60)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.213;0.64;0.213"
                dur="4.189s"
                begin="-7.616s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp61"
              opacity="0.62"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1067.05 227.113C1212.36 272.428 1424.94 239.413 1485.93 378.779C1545.09 513.958 1355.34 631.363 1304.42 769.509C1257.11 897.873 1292.97 1056.11 1199.48 1155.96C1099.67 1262.56 946.075 1313.56 799.797 1308.48C656.377 1303.51 520.426 1231.32 419.726 1128.89C328.719 1036.32 314.512 901.246 277.314 777.031C241.51 657.468 153.638 531.236 207.054 418.707C260.568 305.972 414.886 296.506 529.24 246.311C615.366 208.506 697.32 165.554 791.432 162.195C888.053 158.746 974.671 198.303 1067.05 227.113Z"
              stroke="url(#g61)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.217;0.651;0.217"
                dur="4.189s"
                begin="-7.743s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp62"
              opacity="0.63"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1063.22 222.835C1208.68 265.424 1419.77 228.849 1482.91 366.554C1544.16 500.12 1357.26 620.325 1308.96 758.762C1264.08 887.398 1302.53 1044.33 1211.18 1145.37C1113.65 1253.26 961.606 1306.71 815.874 1304.2C672.988 1301.75 536.373 1232.24 434.332 1132C342.114 1041.42 325.625 907.171 286.434 784.139C248.711 665.714 159.03 541.556 210.263 428.581C261.59 315.399 415.076 303.287 528.064 251.316C613.161 212.174 694.016 167.979 787.663 162.995C883.805 157.879 970.734 195.757 1063.22 222.835Z"
              stroke="url(#g62)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.22;0.662;0.22"
                dur="4.189s"
                begin="-7.87s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp63"
              opacity="0.64"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1059.2 218.687C1204.77 258.56 1414.3 218.467 1479.56 354.477C1542.86 486.4 1358.86 609.34 1313.17 748.021C1270.72 876.881 1311.72 1032.46 1222.52 1134.66C1127.29 1243.78 976.83 1299.65 831.688 1299.69C689.381 1299.73 552.154 1232.9 448.818 1134.88C355.429 1046.29 336.684 912.911 295.53 791.093C255.916 673.837 164.472 551.777 213.522 438.398C262.663 324.811 415.271 310.078 526.867 256.364C610.915 215.91 690.652 170.498 783.805 163.905C879.44 157.136 966.649 193.338 1059.2 218.687Z"
              stroke="url(#g63)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.224;0.672;0.224"
                dur="4.189s"
                begin="-7.997s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp64"
              opacity="0.65"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1055.05 214.706C1200.67 251.871 1408.6 208.303 1475.93 342.587C1541.24 472.836 1360.18 598.446 1317.09 737.321C1277.06 866.363 1320.58 1020.56 1233.55 1123.87C1140.62 1234.17 991.787 1292.42 847.279 1294.99C705.594 1297.5 567.807 1233.35 463.222 1137.55C368.705 1050.97 347.728 918.501 304.64 797.928C263.166 681.87 170.003 561.931 216.873 448.19C263.829 334.24 415.516 316.914 525.692 261.49C608.672 219.747 687.273 173.144 779.905 164.957C875.005 156.553 962.46 191.078 1055.05 214.706Z"
              stroke="url(#g64)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.227;0.683;0.227"
                dur="4.189s"
                begin="-8.124s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp65"
              opacity="0.66"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1050.73 210.864C1196.36 245.331 1402.62 198.333 1471.98 330.86C1539.26 459.404 1361.18 587.62 1320.69 726.641C1283.07 855.818 1329.08 1008.58 1244.21 1112.96C1153.61 1224.4 1006.44 1284.99 862.608 1290.06C721.588 1295.03 583.293 1233.56 477.505 1140C381.901 1055.44 358.718 923.911 313.728 804.613C270.423 689.783 175.588 571.988 220.28 457.926C265.053 343.655 415.774 323.763 524.506 266.661C606.398 223.655 683.846 175.887 775.929 166.123C870.467 156.098 958.138 188.951 1050.73 210.864Z"
              stroke="url(#g65)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.231;0.693;0.231"
                dur="4.189s"
                begin="-8.251s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp66"
              opacity="0.67"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1046.3 207.176C1191.89 238.957 1396.43 188.572 1467.78 319.312C1537 446.124 1361.92 576.88 1324.02 715.999C1288.81 845.266 1337.26 996.561 1254.58 1101.96C1166.31 1214.49 1020.84 1277.38 877.731 1284.93C737.419 1292.34 598.667 1233.54 491.722 1142.23C395.072 1059.71 369.71 929.157 322.849 811.164C277.743 697.589 181.283 581.96 223.799 467.618C266.393 353.067 416.105 330.637 523.368 271.892C604.153 227.648 680.431 178.74 771.94 167.415C865.887 155.788 953.741 186.971 1046.3 207.176Z"
              stroke="url(#g66)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.234;0.704;0.234"
                dur="4.189s"
                begin="-8.378s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp67"
              opacity="0.68"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1041.72 203.646C1187.21 232.753 1389.97 179.028 1463.28 307.952C1534.39 433.002 1362.35 566.234 1327.04 705.402C1294.22 834.715 1345.08 984.503 1264.6 1090.88C1178.67 1204.45 1034.93 1269.59 892.586 1279.61C753.023 1289.43 613.865 1233.3 505.81 1144.26C408.156 1063.78 380.642 934.241 331.942 817.581C285.065 705.29 187.026 591.848 227.371 477.267C267.79 362.476 416.451 337.539 522.22 277.183C601.88 231.727 676.973 181.705 767.88 168.837C861.21 155.625 949.216 185.141 1041.72 203.646Z"
              stroke="url(#g67)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.238;0.714;0.238"
                dur="4.189s"
                begin="-8.505s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp68"
              opacity="0.69"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1037 200.279C1182.36 226.724 1383.28 169.706 1458.5 296.785C1531.46 420.047 1362.5 555.687 1329.76 694.857C1299.33 824.172 1352.57 972.415 1274.28 1079.72C1190.7 1194.29 1048.74 1261.65 907.198 1274.1C768.426 1286.3 628.913 1232.85 519.793 1146.08C421.177 1067.65 391.539 939.166 341.031 823.868C292.415 712.887 192.844 601.652 231.023 486.873C269.271 371.884 416.838 344.468 521.091 282.537C599.609 235.893 673.5 184.784 763.78 170.39C856.466 155.612 944.593 183.466 1037 200.279Z"
              stroke="url(#g68)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.241;0.724;0.241"
                dur="4.189s"
                begin="-8.631s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp69"
              opacity="0.7"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1032.16 197.081C1177.33 220.879 1376.36 160.614 1453.45 285.823C1528.23 407.269 1362.37 545.251 1332.19 684.376C1304.14 813.65 1359.71 960.31 1283.64 1068.51C1202.42 1184.03 1062.25 1253.56 921.56 1268.42C783.619 1282.98 643.801 1232.19 533.663 1147.7C434.127 1071.34 402.392 943.94 350.111 830.03C299.787 720.387 198.731 611.377 234.748 496.44C270.831 381.294 417.264 351.43 519.977 287.957C597.336 240.153 670.01 187.984 759.638 172.081C851.654 155.755 939.871 181.951 1032.16 197.081Z"
              stroke="url(#g69)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.245;0.735;0.245"
                dur="4.189s"
                begin="-8.758s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp70"
              opacity="0.71"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1027.19 194.049C1172.12 215.214 1369.21 151.752 1448.13 275.063C1524.68 394.669 1361.96 534.926 1334.32 673.959C1308.64 803.147 1366.5 948.19 1292.65 1057.23C1213.8 1173.65 1075.47 1245.31 935.666 1262.55C798.595 1279.46 658.524 1231.33 547.414 1149.13C447 1074.84 413.197 948.558 359.174 836.064C307.174 727.783 204.68 621.016 238.542 505.963C272.466 390.699 417.725 358.418 518.876 293.439C595.059 244.5 666.503 191.297 755.453 173.905C846.773 156.049 935.049 180.593 1027.19 194.049Z"
              stroke="url(#g70)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.248;0.745;0.248"
                dur="4.189s"
                begin="-8.885s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp71"
              opacity="0.72"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1022.09 191.183C1166.73 209.731 1361.84 143.121 1442.54 264.508C1520.81 382.249 1361.26 524.714 1336.16 663.609C1312.83 792.669 1372.95 936.057 1301.32 1045.9C1224.85 1163.17 1088.38 1236.93 949.508 1256.52C813.348 1275.74 673.072 1230.26 561.037 1150.36C459.787 1078.15 423.946 953.019 368.215 841.967C314.57 735.073 210.687 630.566 242.4 515.436C274.172 400.095 418.217 365.429 517.786 298.979C592.777 248.932 662.976 194.722 751.223 175.859C841.823 156.493 930.127 179.391 1022.09 191.183Z"
              stroke="url(#g71)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.252;0.756;0.252"
                dur="4.189s"
                begin="-9.012s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp72"
              opacity="0.73"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1016.87 188.481C1161.18 204.428 1354.26 134.719 1436.7 254.159C1516.66 370.011 1360.3 514.616 1337.72 653.327C1316.74 782.215 1379.08 923.916 1309.68 1034.51C1235.58 1152.59 1101.01 1228.39 963.105 1250.32C827.894 1271.82 687.464 1228.99 574.55 1151.4C472.505 1081.27 434.656 957.322 377.25 847.737C321.994 742.255 216.768 640.023 246.341 524.856C275.968 409.478 418.76 372.46 516.726 304.574C590.51 253.445 659.451 198.255 746.972 177.94C836.826 157.084 925.128 178.343 1016.87 188.481Z"
              stroke="url(#g72)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.256;0.766;0.256"
                dur="4.189s"
                begin="-9.139s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp73"
              opacity="0.74"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1011.54 185.963C1155.47 199.326 1346.46 126.569 1430.59 244.038C1512.2 357.978 1359.06 504.655 1338.99 643.136C1320.35 771.811 1384.85 911.791 1317.69 1023.1C1245.98 1141.94 1113.33 1219.74 976.435 1243.97C842.211 1267.72 701.676 1227.53 587.929 1152.25C485.131 1084.22 445.304 961.485 386.258 853.391C329.424 749.345 222.902 649.404 250.343 534.239C277.835 418.863 419.336 379.526 515.679 310.24C588.24 258.056 655.911 201.914 742.682 180.167C831.766 157.84 920.036 177.466 1011.54 185.963Z"
              stroke="url(#g73)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.259;0.777;0.259"
                dur="4.189s"
                begin="-9.266s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp74"
              opacity="0.75"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1006.1 183.621C1149.61 194.42 1338.46 118.667 1424.25 234.142C1507.46 346.147 1357.56 494.829 1339.99 633.035C1323.66 761.454 1390.3 899.68 1325.37 1011.66C1256.05 1131.21 1125.36 1210.97 989.507 1237.47C856.308 1263.45 715.718 1225.89 601.184 1152.93C497.675 1086.99 455.9 965.504 395.249 858.925C336.869 756.337 229.1 658.7 254.418 543.577C279.783 428.243 419.956 386.62 514.657 315.969C585.982 262.758 652.37 205.691 738.368 182.532C826.658 158.755 914.865 176.756 1006.1 183.621Z"
              stroke="url(#g74)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.262;0.788;0.262"
                dur="4.189s"
                begin="-9.393s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp75"
              opacity="0.76"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1000.55 181.46C1143.59 189.711 1330.26 111.014 1417.66 224.474C1502.44 334.524 1355.8 485.142 1340.71 623.028C1326.68 751.151 1395.41 887.591 1332.72 1000.19C1265.79 1120.41 1137.09 1202.08 1002.32 1230.83C870.179 1259.01 729.581 1224.06 614.307 1153.43C510.129 1089.59 466.438 969.379 404.216 864.338C344.324 763.23 235.355 667.912 258.56 552.868C281.808 437.615 420.616 393.74 513.658 321.761C583.733 267.549 648.827 209.586 734.029 185.034C821.502 159.829 909.617 176.213 1000.55 181.46Z"
              stroke="url(#g75)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.266;0.798;0.266"
                dur="4.189s"
                begin="-9.52s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp76"
              opacity="0.77"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M994.898 179.475C1137.42 185.2 1321.86 103.612 1410.83 215.035C1497.12 323.109 1353.78 475.595 1341.15 613.117C1329.4 740.902 1400.19 875.526 1339.74 988.704C1275.2 1109.54 1148.51 1193.08 1014.86 1224.04C883.817 1254.4 743.261 1222.06 627.292 1153.75C522.486 1092.02 476.911 973.11 413.154 869.629C351.784 770.023 241.663 677.033 262.766 562.109C283.907 446.975 421.315 400.884 512.679 327.612C581.491 272.428 645.28 213.594 729.664 187.672C816.296 161.058 904.29 175.835 994.898 179.475Z"
              stroke="url(#g76)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.269;0.809;0.269"
                dur="4.189s"
                begin="-9.647s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp77"
              opacity="0.78"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M989.129 177.675C1131.09 180.894 1313.27 96.4688 1403.75 205.835C1491.52 311.915 1351.49 466.199 1341.3 603.314C1331.83 730.72 1404.62 863.498 1346.42 977.211C1284.27 1098.62 1159.61 1183.98 1027.12 1217.13C897.209 1249.63 756.742 1219.88 640.124 1153.9C534.733 1094.27 487.306 976.703 422.048 874.804C359.234 776.72 248.01 686.071 267.021 571.304C286.067 456.327 422.04 408.056 511.711 333.528C579.247 277.398 641.72 217.723 725.263 190.45C811.033 162.451 898.876 175.629 989.129 177.675Z"
              stroke="url(#g77)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.273;0.819;0.273"
                dur="4.189s"
                begin="-9.774s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp78"
              opacity="0.79"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M983.253 176.057C1124.61 176.791 1304.47 89.5821 1396.44 196.873C1485.64 300.939 1348.93 456.953 1341.17 593.618C1333.95 720.605 1408.71 851.508 1352.75 965.713C1293 1087.65 1170.4 1174.79 1039.1 1210.09C910.357 1244.7 770.026 1217.53 652.806 1153.88C546.87 1096.36 497.623 980.156 430.901 879.859C366.677 783.318 254.397 695.02 271.329 580.448C288.292 465.666 422.795 415.249 510.757 339.503C577.005 282.455 638.153 221.966 720.835 193.365C805.721 164.001 893.384 175.59 983.253 176.057Z"
              stroke="url(#g78)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.276;0.83;0.276"
                dur="4.189s"
                begin="-9.901s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp79"
              opacity="0.8"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M977.317 174.639C1118.02 172.91 1295.54 82.9726 1388.94 188.169C1479.53 290.205 1346.16 447.88 1340.81 584.051C1335.83 710.58 1412.51 839.58 1358.79 954.233C1301.44 1076.65 1180.92 1165.52 1050.84 1202.94C923.301 1239.63 783.154 1215.03 665.377 1153.72C558.938 1098.31 507.905 983.489 439.754 884.814C374.155 789.834 260.868 703.896 275.733 589.556C290.625 475.007 423.626 422.483 509.863 345.554C574.812 287.616 634.625 226.342 716.425 196.433C800.405 165.727 887.86 175.738 977.317 174.639Z"
              stroke="url(#g79)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.28;0.84;0.28"
                dur="4.189s"
                begin="-10.028s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp80"
              opacity="0.81"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M971.276 173.393C1111.29 169.225 1286.42 76.6143 1381.2 179.7C1473.14 279.689 1343.13 438.956 1340.16 574.591C1337.4 700.622 1415.96 827.692 1364.48 942.75C1309.52 1065.6 1191.11 1156.16 1062.29 1195.67C935.99 1234.41 796.074 1212.36 677.785 1153.38C570.883 1100.07 518.098 986.674 448.555 889.641C381.616 796.242 267.368 712.671 280.18 598.601C293.015 484.322 424.481 429.726 508.979 351.653C572.618 292.851 631.087 230.82 711.985 199.626C795.038 167.601 882.257 176.044 971.276 173.393Z"
              stroke="url(#g80)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.283;0.851;0.283"
                dur="4.189s"
                begin="-10.155s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp81"
              opacity="0.82"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M965.152 172.36C1104.44 165.775 1277.13 70.5474 1373.25 171.506C1466.49 269.432 1339.87 430.222 1339.26 565.279C1338.7 690.773 1419.1 815.888 1369.86 931.308C1317.29 1054.54 1201.01 1146.74 1073.48 1188.31C948.442 1229.07 808.802 1209.55 690.048 1152.9C582.725 1101.71 528.221 989.753 457.321 894.379C389.077 802.577 273.918 721.382 284.69 607.618C295.482 493.646 425.381 437.016 508.126 357.835C570.446 298.199 627.563 235.438 707.538 202.982C789.645 169.66 876.599 176.547 965.152 172.36Z"
              stroke="url(#g81)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.287;0.861;0.287"
                dur="4.189s"
                begin="-10.282s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp82"
              opacity="0.83"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M958.939 171.507C1097.45 162.529 1267.67 64.7416 1365.1 163.558C1459.59 259.406 1336.35 421.649 1338.1 556.088C1339.72 681.008 1421.9 804.141 1374.9 919.88C1324.71 1043.45 1210.58 1137.25 1084.38 1180.84C960.644 1223.58 821.326 1206.59 702.151 1152.27C594.447 1103.18 538.258 992.693 466.04 898.997C396.526 808.81 280.503 729.996 289.25 616.574C298.013 502.945 426.315 444.319 507.294 364.068C568.284 303.626 624.042 240.164 703.076 206.467C784.216 171.873 870.878 177.215 958.939 171.507Z"
              stroke="url(#g82)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.29;0.871;0.29"
                dur="4.189s"
                begin="-10.409s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp83"
              opacity="0.84"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M952.646 170.863C1090.34 159.518 1258.06 59.2273 1356.73 155.887C1452.44 249.643 1332.61 413.271 1336.67 547.051C1340.45 671.358 1424.38 792.486 1379.61 908.501C1331.81 1032.37 1219.85 1127.71 1095.01 1173.3C972.598 1217.99 833.647 1203.5 714.096 1151.51C606.053 1104.52 548.214 995.526 474.713 903.524C403.965 814.968 287.126 738.541 293.863 625.497C300.613 512.247 427.288 451.664 506.49 370.379C566.141 309.159 620.532 245.024 698.606 210.11C778.759 174.266 865.102 178.076 952.646 170.863Z"
              stroke="url(#g83)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.294;0.882;0.294"
                dur="4.189s"
                begin="-10.535s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp84"
              opacity="0.85"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M946.288 170.398C1083.13 156.711 1248.3 53.9742 1348.18 148.464C1445.06 240.114 1328.64 405.059 1335.01 538.139C1340.93 661.797 1426.56 780.896 1384.01 897.145C1338.59 1021.26 1228.82 1118.1 1105.36 1165.65C984.315 1212.26 845.777 1200.25 725.894 1150.58C617.552 1105.69 558.098 998.221 483.352 907.93C411.405 821.02 293.797 746.983 298.541 634.354C303.294 521.518 428.312 459.017 505.725 376.736C564.029 314.766 617.048 249.986 694.142 213.879C773.291 176.809 859.287 179.099 946.288 170.398Z"
              stroke="url(#g84)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.297;0.892;0.297"
                dur="4.189s"
                begin="-10.662s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp85"
              opacity="0.86"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M939.851 170.133C1075.8 154.131 1238.4 49.0066 1339.44 141.314C1437.44 230.847 1324.44 397.038 1333.09 529.38C1341.12 652.351 1428.41 769.4 1388.09 885.84C1345.04 1010.16 1237.47 1108.45 1115.43 1157.92C995.775 1206.42 857.693 1196.88 737.524 1149.53C628.922 1106.73 567.889 1000.8 491.935 912.237C418.825 826.988 300.497 755.346 303.264 643.165C306.035 530.779 429.369 466.398 504.982 383.16C561.931 320.468 613.571 255.072 689.669 217.794C767.795 179.523 853.419 180.306 939.851 170.133Z"
              stroke="url(#g85)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.301;0.903;0.301"
                dur="4.189s"
                begin="-10.789s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp86"
              opacity="0.87"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M933.358 170.083C1068.37 151.793 1228.36 44.3389 1330.52 134.452C1429.61 221.857 1320.03 389.225 1330.93 520.79C1341.07 643.039 1429.96 758.015 1391.86 874.605C1351.17 999.087 1245.83 1098.78 1125.24 1150.14C1007 1200.49 869.416 1193.39 749.004 1148.36C640.183 1107.65 577.606 1003.28 500.481 916.46C426.244 832.886 307.243 763.641 308.05 651.944C308.857 540.042 430.479 473.822 504.284 389.662C559.87 326.278 610.126 260.293 685.21 221.868C762.295 182.42 847.52 181.711 933.358 170.083Z"
              stroke="url(#g86)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.304;0.913;0.304"
                dur="4.189s"
                begin="-10.916s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp87"
              opacity="0.88"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M926.796 170.228C1060.84 149.677 1218.19 39.9526 1321.42 127.86C1421.54 213.127 1315.4 381.604 1328.53 512.353C1340.74 633.845 1431.2 746.728 1395.3 863.426C1356.97 988.023 1253.87 1089.08 1134.75 1142.28C1017.96 1194.45 880.923 1189.78 760.313 1147.05C651.313 1108.43 587.228 1005.65 508.969 920.58C433.641 838.694 314.015 771.848 312.879 660.668C311.741 549.285 431.624 481.265 503.611 396.223C557.828 332.173 606.695 265.628 680.749 226.081C756.776 185.48 841.575 183.293 926.796 170.228Z"
              stroke="url(#g87)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.308;0.924;0.308"
                dur="4.189s"
                begin="-11.043s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp88"
              opacity="0.89"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M920.189 170.578C1053.22 147.796 1207.9 35.8598 1312.15 121.553C1413.27 204.671 1310.57 374.189 1325.91 504.085C1340.16 624.783 1432.14 735.555 1398.44 852.319C1362.46 976.987 1261.62 1079.35 1144.01 1134.37C1028.69 1188.32 892.235 1186.06 771.47 1145.63C662.33 1109.09 596.772 1007.91 517.418 924.609C441.035 844.425 320.831 779.977 317.771 669.349C314.705 558.517 432.825 488.738 502.985 402.851C555.826 338.164 603.301 271.088 676.308 230.443C751.26 188.714 835.609 185.063 920.189 170.578Z"
              stroke="url(#g88)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.311;0.935;0.311"
                dur="4.189s"
                begin="-11.17s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp89"
              opacity="0.9"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M913.529 171.133C1045.52 146.147 1197.5 32.0593 1302.72 115.529C1404.79 196.491 1305.54 366.979 1323.05 495.986C1339.33 615.857 1432.79 724.498 1401.28 841.287C1367.64 965.982 1269.07 1069.61 1152.98 1126.41C1039.16 1182.1 903.338 1182.22 782.462 1144.09C673.221 1109.62 606.228 1010.07 525.815 928.546C448.414 850.074 327.68 788.026 322.714 677.981C317.739 567.735 434.07 496.237 502.397 409.543C553.857 344.248 599.935 276.669 671.88 234.949C745.741 192.118 829.614 187.018 913.529 171.133Z"
              stroke="url(#g89)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.315;0.945;0.315"
                dur="4.189s"
                begin="-11.297s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp90"
              opacity="0.91"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M906.818 171.892C1037.73 144.733 1186.98 28.5536 1293.14 109.792C1396.11 188.589 1300.3 359.981 1319.97 488.061C1338.25 607.071 1433.13 713.564 1403.81 830.338C1372.5 955.017 1276.21 1059.85 1161.68 1118.4C1049.38 1175.81 914.228 1178.29 793.284 1142.43C683.981 1110.04 615.589 1012.13 534.157 932.393C455.774 855.645 334.555 795.995 327.704 686.567C320.84 576.939 435.358 503.763 501.844 416.299C551.918 350.425 596.597 282.371 667.464 239.602C740.219 195.693 823.591 189.16 906.818 171.892Z"
              stroke="url(#g90)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.319;0.956;0.319"
                dur="4.189s"
                begin="-11.424s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp91"
              opacity="0.92"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M900.057 172.851C1029.85 143.548 1176.35 25.3373 1283.39 104.337C1387.22 180.963 1294.86 353.19 1316.66 480.308C1336.91 598.425 1433.18 702.752 1406.02 819.471C1377.03 944.09 1283.04 1050.09 1170.09 1110.35C1059.35 1169.43 924.901 1174.24 803.932 1140.67C694.606 1110.32 624.852 1014.08 542.437 936.146C463.109 861.132 341.453 803.877 332.735 695.098C324.002 586.12 436.685 511.309 501.324 423.113C550.008 356.688 593.285 288.186 663.06 244.392C734.694 199.432 817.541 191.481 900.057 172.851Z"
              stroke="url(#g91)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.322;0.966;0.322"
                dur="4.189s"
                begin="-11.551s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp92"
              opacity="0.93"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M893.256 174.018C1021.89 142.602 1165.62 22.4205 1273.5 99.1758C1378.14 173.625 1289.23 346.619 1313.13 472.74C1335.34 589.93 1432.93 692.077 1407.94 808.7C1381.25 933.217 1289.57 1040.34 1178.22 1102.26C1069.06 1162.98 935.362 1170.11 814.409 1138.8C705.099 1110.5 634.019 1015.94 550.66 939.815C470.423 866.544 348.376 811.682 337.814 703.584C327.232 595.287 438.057 518.882 500.845 429.992C548.134 363.043 590.007 294.123 658.675 249.33C729.174 203.343 811.472 193.992 893.256 174.018Z"
              stroke="url(#g92)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.326;0.977;0.326"
                dur="4.189s"
                begin="-11.678s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp93"
              opacity="0.94"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M886.438 175.397C1013.89 141.899 1154.81 19.8074 1263.49 94.3131C1368.9 166.58 1283.44 340.274 1309.41 465.363C1333.54 581.595 1432.42 681.547 1409.58 798.034C1385.19 922.406 1295.82 1030.6 1186.1 1094.15C1078.53 1156.47 945.628 1165.89 824.734 1136.83C715.478 1110.57 643.111 1017.7 558.845 943.404C477.735 871.886 355.344 819.413 342.957 712.026C330.548 604.443 439.495 526.485 500.426 436.938C546.317 369.495 586.786 300.184 654.334 254.417C723.683 207.43 805.409 196.694 886.438 175.397Z"
              stroke="url(#g93)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.329;0.987;0.329"
                dur="4.189s"
                begin="-11.805s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp94"
              opacity="0.95"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M879.575 176.987C1005.81 141.439 1143.9 17.4983 1253.33 89.7501C1359.47 159.831 1277.45 334.157 1305.46 458.181C1331.49 573.423 1431.61 671.167 1410.9 787.479C1388.8 911.664 1301.75 1020.88 1193.69 1086.03C1087.74 1149.91 955.666 1161.59 834.873 1134.77C725.708 1110.54 652.09 1019.39 566.956 946.916C485.011 877.158 362.321 827.068 348.132 720.424C333.917 613.585 440.964 534.117 500.036 443.951C544.526 376.042 583.589 306.367 650.004 259.651C718.19 211.69 799.321 199.587 879.575 176.987Z"
              stroke="url(#g94)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.332;0.997;0.332"
                dur="4.189s"
                begin="-11.932s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp95"
              opacity="0.96"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M872.698 178.791C997.677 141.226 1132.92 15.4973 1243.06 85.4918C1349.88 153.383 1271.3 328.275 1301.33 451.2C1329.22 565.422 1430.54 660.944 1411.96 777.043C1392.12 900.999 1307.4 1011.19 1201.02 1077.89C1096.71 1143.3 965.504 1157.21 844.853 1132.63C735.815 1110.42 660.985 1020.99 575.021 950.354C492.277 882.364 369.334 834.653 353.364 728.781C337.366 622.715 442.495 541.78 499.704 451.032C542.791 382.685 580.447 312.676 645.717 265.036C712.727 216.127 793.24 202.674 872.698 178.791Z"
              stroke="url(#g95)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.336;1.0;0.336"
                dur="4.189s"
                begin="-12.059s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp96"
              opacity="0.97"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M865.77 180.799C989.466 141.249 1121.85 13.7946 1232.64 81.5293C1340.1 147.229 1264.96 322.619 1296.96 444.414C1326.7 557.585 1429.16 650.874 1412.69 766.72C1395.1 890.408 1312.74 1001.52 1208.05 1069.74C1105.4 1136.63 975.098 1152.76 854.63 1130.4C745.757 1110.19 669.753 1022.5 582.996 953.711C499.489 887.495 376.339 842.155 358.612 737.085C340.852 631.823 444.045 549.462 499.389 458.17C541.071 389.414 577.321 319.097 641.434 270.56C707.256 220.729 787.128 205.944 865.77 180.799Z"
              stroke="url(#g96)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.339;1.0;0.339"
                dur="4.189s"
                begin="-12.186s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp97"
              opacity="0.98"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M858.848 183.023C981.228 141.521 1110.72 12.402 1222.13 77.8753C1330.19 141.381 1258.47 317.204 1292.43 437.837C1323.98 549.928 1427.54 640.974 1413.17 756.529C1397.82 879.906 1317.8 991.896 1214.82 1061.6C1113.86 1129.94 984.5 1148.25 864.255 1128.09C755.585 1109.87 678.443 1023.94 590.933 956.999C506.7 892.562 383.388 849.588 363.926 745.348C344.428 640.918 445.666 557.175 499.144 465.377C539.42 396.238 574.265 325.642 637.21 276.233C701.832 225.507 781.042 209.408 858.848 183.023Z"
              stroke="url(#g97)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.343;1.0;0.343"
                dur="4.189s"
                begin="-12.313s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp98"
              opacity="0.99"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M851.901 185.453C972.936 142.034 1099.53 11.3115 1211.5 74.5228C1320.11 135.835 1251.82 312.023 1287.7 431.463C1321.03 542.446 1425.65 631.238 1413.35 746.465C1400.23 869.492 1322.56 982.312 1221.32 1053.45C1122.06 1123.21 993.677 1143.67 873.695 1125.7C765.263 1109.46 687.022 1025.3 598.796 960.211C513.873 897.56 390.444 856.941 369.271 753.561C348.059 649.992 447.326 564.91 498.936 472.641C537.807 403.149 571.247 332.301 633.013 282.046C696.424 230.451 774.95 213.058 851.901 185.453Z"
              stroke="url(#g98)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.346;1.0;0.346"
                dur="4.189s"
                begin="-12.439s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
            <path
              className="sp sp99"
              opacity="1.0"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M844.947 188.099C964.608 142.796 1088.28 10.5328 1200.78 71.4823C1309.9 130.6 1245.01 307.089 1282.78 425.307C1317.88 535.153 1423.5 621.682 1413.27 736.544C1402.34 859.181 1327.03 972.782 1227.55 1045.32C1130.01 1116.45 1002.64 1139.04 882.962 1123.24C774.803 1108.97 695.502 1026.59 606.597 963.359C521.021 902.497 397.52 864.226 374.659 761.733C351.757 659.052 449.037 572.674 498.78 479.973C536.244 410.155 568.283 339.082 628.859 288.007C691.049 235.571 768.87 216.901 844.947 188.099Z"
              stroke="url(#g99)"
              strokeWidth="6.25195"
            >
              <animate
                attributeName="opacity"
                values="0.35;1.0;0.35"
                dur="4.189s"
                begin="-12.566s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
            </path>
          </g>

          <image
            href="/images/image.webp"
            x="547"
            y="362.887"
            width="571.467"
            height="523.066"
            transform="rotate(-13.5495 547 362.887)"
            preserveAspectRatio="none"
            style={{ imageRendering: "crisp-edges" }}
          />
        </svg>
      </div>

      <div className="spiral-content-layer">
        <div className="spiral-copy">
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>

        <div className="spiral-scroll-indicator">
          <span>{content.scrollText}</span>

          <svg
            onClick={handleScrollDown}
            className="scrollIcon"
            width="24"
            height="38"
            viewBox="0 0 24 38"
            fill="none"
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="34"
              rx="11"
              stroke="white"
              strokeWidth="1.5"
            />

            <rect
              x="10.5"
              y="7"
              width="3"
              height="8"
              rx="1.5"
              fill="white"
              className="scroll-dot"
            />
          </svg>

          <i />
        </div>
      </div>
    </section>
  );
}
