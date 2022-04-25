import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Scrollbar from '../.';

const App = () => {

  const ref = React.useRef()

  React.useEffect(() => {
    console.log(ref);
    
  }, [])

  return (
    <div style={{width: 200, height: 500}}>
      <Scrollbar 
        darkMode={true}
        ref={ref}
        autoHide={true}
        thumbSize={4}
        onScrollDown={(e: any) => {
          console.log(e);
        }}
        onScrollStart={() => {
          console.log('onScrollStart');
          
        }}
      >
        <div style={{paddingRight: 20}}>
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
        </div>
      </Scrollbar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
