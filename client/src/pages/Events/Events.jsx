import { Wrapper } from "./Events.styled";

import event1 from "src/assets/images/events/event-1.jpg";
import event2 from "src/assets/images/events/event-2.jpg";
import event3 from "src/assets/images/events/event-3.jpg";

function Events() {
  return (
    <Wrapper>
      <h2>Wydarzenia</h2>
      <div className="event-list">
        <div className="event-item">
          <img src={event1} alt="Koncert kolęd" loading="lazy" />
          <h3>Koncert kolęd</h3>
          <p>
            Data: 21 grudnia 2025
            <br />
            Miejsce: Kościół św. Anny, Warszawa
          </p>
        </div>
        <div className="event-item">
          <img src={event2} alt="Wiosenny koncert" loading="lazy" />
          <h3>Wiosenny koncert</h3>
          <p>
            Data: 20 kwietnia 2025
            <br />
            Miejsce: Centrum Kultury, Kraków
          </p>
        </div>
        <div className="event-item">
          <img src={event3} alt="Warsztaty wokalne" loading="lazy" />
          <h3>Warsztaty wokalne</h3>
          <p>
            Data: 4 maja 2025
            <br />
            Prowadzenie: dr Katarzyna Nowak
          </p>
        </div>
        <div className="event-item">
          <img src={event1} alt="Koncert kolęd" loading="lazy" />
          <h3>Koncert kolęd</h3>
          <p>
            Data: 21 grudnia 2025
            <br />
            Miejsce: Kościół św. Anny, Warszawa
          </p>
        </div>
        <div className="event-item">
          <img src={event2} alt="Wiosenny koncert" loading="lazy" />
          <h3>Wiosenny koncert</h3>
          <p>
            Data: 20 kwietnia 2025
            <br />
            Miejsce: Centrum Kultury, Kraków
          </p>
        </div>
        <div className="event-item">
          <img src={event3} alt="Warsztaty wokalne" loading="lazy" />
          <h3>Warsztaty wokalne</h3>
          <p>
            Data: 4 maja 2025
            <br />
            Prowadzenie: dr Katarzyna Nowak
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Events;
