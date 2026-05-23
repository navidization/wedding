import { useParams } from "react-router-dom";
import InvitationShell from "../components/InvitationShell/InvitationShell";
import { GuestKey, guests } from "../data/guests";
import NotFoundPage from "./NotFoundPage";

function isGuestKey(value: string | undefined): value is GuestKey {
  return Boolean(value && value in guests);
}

export default function InvitePage() {
  const { guestKey } = useParams();

  if (!isGuestKey(guestKey)) {
    return <NotFoundPage />;
  }

  return <InvitationShell guest={guests[guestKey]} />;
}
