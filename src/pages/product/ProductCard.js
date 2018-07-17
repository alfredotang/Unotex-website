import React, { Component } from 'react';
import './product-card.css';

import Jacquard1 from './Jacquard 1.png';
import Jacquard2 from './Jacquard 2.png';
import Knitting from './Knitting Tweed.png';
import Lace from './Lace.png';
import Legging from './Legging, Knitting Jeans.png';
import Mesh from './Mesh.png';

class ProductCard extends Component {
  render() {
    return (
      <div>
        <div className="wrap">
          <div className="tile">
            <img src={Jacquard1} />
            <div className="text">
              <h1>Jacquard 1</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">
                Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
                bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{' '}
              </p>
            </div>
          </div>

          <div className="tile">
            <img src={Jacquard2} />
            <div className="text">
              <h1>Jacquard 2</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">
                Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
                bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{' '}
              </p>
            </div>
          </div>

          <div className="tile">
            <img src={Knitting} />
            <div className="text">
              <h1>Knitting Tweed</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">
                Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
                bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="tile">
            <img src={Lace} />
            <div className="text">
              <h1>Lace</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">
                Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
                bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{' '}
              </p>
            </div>
          </div>

          <div className="tile">
            <img src={Legging} />
            <div className="text">
              <h1 style={{ fontSize: 22 }}>Legging, Knitting Jeans</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">
                Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
                bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{' '}
              </p>
            </div>
          </div>

          <div className="tile">
            <img src={Mesh} />
            <div className="text">
              <h1>Mesh</h1>
              <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
              <p className="animate-text">
                Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta
                bresaola pork chicken meatloaf. Flank sirloin strip steak
                prosciutto kevin turducken.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
