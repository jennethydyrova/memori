export type User = {
  id: string;
  name: string;
  email: string;
};

export type Person = {
  id: string;
  name: string;
  dob: string;
  dod: string | null;
  photoUrl?: string;
  relationships: {
    children: string[];
    spouse?: string;
  };
  familyId: string;
};

export type Memory = {
  id: string;
  personId: string;
  authorId: string;
  content: string;
  createdAt: string;
  mediaUrls: string[];
  tags: string[];
};

export type Family = {
  id: string;
  name: string;
  ownerId: string;
  members: string[];
};
