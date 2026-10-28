// data/guestMoments.ts

export interface GuestMoment {
  id: string;
  src: string;
  alt: string;
  location: string;
  caption?: string;
}

export const guestMomentsData: GuestMoment[] = [
  {
    id: "1",
    src: "/images/ella-bridge.jpg",
    alt: "Guests enjoying the scenic view of Nine Arch Bridge, Ella",
    location: "Ella Nine Arch Bridge",
    caption: "Scenic train trip along Ella"
  },
  {
    id: "2",
    src: "/images/sigiriya.jpg",
    alt: "Travelers exploring Sigiriya Lion Rock Fortress gateway",
    location: "Sigiriya Rock Fortress",
    caption: "Climbing the Lion Rock"
  },
  {
    id: "3",
    src: "/images/hiriketiya.png",
    alt: "Guests relaxing at Hiriketiya surfing bay",
    location: "Hiriketiya Beach",
    caption: "Relaxing at southern coast"
  },
  {
    id: "4",
    src: "/images/polonnaruwa.jpg",
    alt: "Cultural sightseeing at Anuradhapura sacred city",
    location: "Anuradhapura Sacred City",
    caption: "Ancient heritage site visit"
  },
  {
    id: "5",
    src: "/images/horton.jpg",
    alt: "Trekking through Horton Plains to World's End",
    location: "Horton Plains",
    caption: "Early morning hike at World's End"
  }
];