import React, { useEffect } from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';
import image from '../assets/earth.png';
import Button from './Button.jsx';
import { RiGamepadFill } from 'react-icons/ri';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';

import * as THREE from 'three';
import { Color } from 'three';

let camera, scene, renderer;
let geometry, material, mesh;

export default function Home() {
  useEffect(() => {
    init();
  }, []);

  return (
    <Section id="home">
      <div className="text">
        <h1>
          <span className="highlight">Earthium</span> is a RPG strategic game
        </h1>
        <p>
          Where you can fight other, <span className="highlight"> player </span>
          and
          <span className="highlight"> computer </span>
          by bulding up your equipments and increasing your level. Welcome!
        </p>
        <Button text="Game Start" icon={<RiGamepadFill />} />
      </div>

      <div id="test" />
    </Section>
  );
}

function init() {
  camera = new THREE.PerspectiveCamera(15, 500 / 500, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.SphereGeometry(0.1, 30, 30);
  material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('textures/earth.png'),
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(500, 500);
  renderer.setAnimationLoop(animation);
  //document.body.appendChild(renderer.domElement);
  //React.createElement("div", { className: "contexCon" },renderer.domElement);
  document.getElementById('test').innerHTML = '';
  document.getElementById('test').appendChild(renderer.domElement);
}

function animation(time) {
  mesh.rotation.reorder('XZY');
  mesh.rotation.y = time / 3000;
  mesh.rotation.z = THREE.Math.degToRad(-21.5);

  renderer.render(scene, camera);
}

const Section = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
  .image {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0.05em auto;
    background-image: url(${image});
    border-radius: 50%;
    border-color: red;
    background-size: 630px;
    animation: rotate 10s linear infinite;
    transition: transform 200ms linear;
    transform-style: preserve-3d;
    box-shadow: inset 20px 0 80px 6px rgb(0, 0, 0);
    color: #000;
  }

  @keyframes rotate {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 630px 0;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;
