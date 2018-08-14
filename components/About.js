import React, { Component } from 'react';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

class About extends Component {
  render() {
    return (
      <div
        style={{
          width: '60vw',
          margin: '0 auto',
          lineHeight: '1.5'
        }}
      >
        <text>
          New York native Chez Negron is a self-taught artist that has been
          creating art since he was a child. He is said to have picked up a
          pencil at birth and began to draw. Chez was inspired by his mother
          Grace Vargas- an artist herself who was an Art Teacher for NYC Board
          of Education for over 20 years.
          <br />
          <br />
          Chez passions began with studying various different forms of
          art...including traditional art, comic book art, graffiti, abstract
          and more. Inspired by his mother and love of his city, Chez works with
          many different mediums. Including: Spray Paint, Acrylic, 3-D Paint,
          Watercolors, Oil Paints, Pens, Pencils, Markers, Colored Pencils,
          Pastels, Charcoal, Stencils, and more. “Money making Manhattan” helped
          mold Chez into the artist he is today.
          <br />
          <br />
          He currently is living 45 minutes outside of DC in Ashburn with his
          girlfriend and pup Chalupa Batman.
        </text>
      </div>
    );
  }
}

export default About;
