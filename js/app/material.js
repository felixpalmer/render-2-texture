define( ['three', 'shader!simple.vert', 'shader!simple.frag', 'shader!rtt.frag', 'texture'], function ( THREE, simpleVert, simpleFrag, rttFrag, texture ) {
  // Shader objects support redefining of #defines.
  // See `simple.frag` file, where `faceColor` is already defined to be white, and we are overriding it to red here
  simpleFrag.define( 'faceColor', 'vec3(1.0, 0, 0)' );
  var material = {
    bump: new THREE.MeshPhongMaterial( { bumpMap: texture.grass } ),
    grass: new THREE.MeshBasicMaterial( { map: texture.grass } ),
    rtt: new THREE.ShaderMaterial( {
      vertexShader: simpleVert.value,
      fragmentShader: rttFrag.value
    }),
    shader: new THREE.ShaderMaterial( {
      uniforms: {
        uColor: { type: 'c', value: new THREE.Color( '#ff0000' ) },
        uTexture: { type: 't', value: null }
      },
      vertexShader: simpleVert.value,
      fragmentShader: simpleFrag.value
    }),
    solid: new THREE.MeshLambertMaterial( {
      color: 0x00dcdc,
      shading: THREE.FlatShading
    }),
    wire: new THREE.MeshBasicMaterial( { wireframe: true } )
  };

  return material;
} );
