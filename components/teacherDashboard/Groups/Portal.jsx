
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react'

export default function Portal({open}) {
  

    return (
    <>
     { open && ( <TransitionablePortal
        closeOnTriggerClick
        openOnTriggerClick
        trigger={
            <Button
              content={open ? 'Subject does not exist' : 'Open Portal'}
              negative={open}
              positive={!open}
            />
          }
      >
        <Segment
          style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
        >
          <Header>Notification</Header>
          <p>Go to the class section</p>
          <p>Meet the Administrator to get your subject assigned</p>
        </Segment>
      </TransitionablePortal>
    
     )}
     </>
    )
  
}
