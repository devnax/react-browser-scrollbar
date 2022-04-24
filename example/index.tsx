import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Scrollbar from '../.';

const App = () => {
  return (
    <div style={{width: 200, height: 500}}>
      <Scrollbar 
        autoHide
        onScroll={(e: any, optins) => {
          console.log(optins);
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi, ea recusandae ipsam officiis ut perferendis dolorem commodi culpa blanditiis voluptate facilis et sed autem alias consequatur laboriosam reprehenderit harum.
      </Scrollbar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
