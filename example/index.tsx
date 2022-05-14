import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Scrollbar from '../.';

const App = () => {

  const ref: any = React.useRef()

  React.useEffect(() => {
    console.log(ref);
    
  }, [])

  return (
    <div style={{width: 200, height: 500}}>
      <Scrollbar 
        ref={ref}
        autoHide={false}
        thumbSize={3}
        
      >
        <div style={{paddingRight: 20}}>
          <button onClick={() => ref.scrollToBottom()}>Bottom</button>
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
        <button onClick={() => ref.scrollToTop()}>Top</button>
        </div>
      </Scrollbar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
