import { Post } from "../page";

export const Author = ({
  firstName,
  lastName,
  userName,
  avatar,
}: Post["author"]) => {
  return (
    <div className="flex items-center gap-2">
      <img src={avatar} alt={firstName} className="h-10 w-10 rounded-full" />
      <div className="grid">
        <span className="font-semibold">{firstName + " " + lastName}</span>
        <span className="text-muted-foreground text-sm">@{userName}</span>
      </div>
    </div>
  );
};
