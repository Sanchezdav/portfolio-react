import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container'

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <h1>Hi home!!!</h1>
        <Image src={require('../assets/hero.gif')} alt="hero-image" />
        <p>
          Heirloom selvage stumptown gochujang health goth pinterest. Mlkshk meh man bun, fingerstache distillery kogi ugh cliche mumblecore paleo. 90's la croix artisan williamsburg, synth lyft intelligentsia yr ugh pickled poke listicle. Disrupt direct trade mumblecore fingerstache heirloom. Hoodie migas four dollar toast, meggings DIY vinyl prism hell of. Ramps pinterest kickstarter, meditation lyft pok pok semiotics tofu slow-carb wayfarers disrupt chicharrones neutra aesthetic fashion axe. Bushwick ennui cloud bread williamsburg banh mi. PBR&B brooklyn franzen sriracha. Selfies woke tbh, distillery 8-bit meh try-hard. Small batch fixie viral lomo kitsch cornhole paleo. Irony you probably haven't heard of them celiac vegan church-key, kitsch sriracha. Forage semiotics poke chambray. Put a bird on it DIY shoreditch master cleanse try-hard, iPhone locavore cliche af irony normcore chartreuse.
        </p>
      </Container>
    );
  }
}
