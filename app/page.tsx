"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        backgroundImage: "url('./images/v1.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
   
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            fontWeight: 700,
            margin: 0,
            marginBottom: "0px",
            marginTop: "110px",
            color: "#61063b",
          }}
        >
          WELCOME TO MSU-TCTO
        </h1>

        <button
          onClick={() => router.push("/Map")}
          style={{
            marginBottom: "0px",
            marginTop:"30px",
            fontSize: "18px",
            padding: "12px 45px",
            borderRadius: "12px",
            border: "2px solid #111",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: 600,
            transition: "0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#61063b";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "#61063b";
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
