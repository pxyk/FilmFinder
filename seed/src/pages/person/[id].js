import { useRouter } from "next/router";
import Head from "next/head";
import { fetchPersonData } from "@/api/person/personapi";
import PersonalInfo from "@/components/personDetail/PersonalInfo";
import PersonCredits from "@/components/personDetail/PersonCredits";

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    // Fetch person data based on the person ID
    const personData = await fetchPersonData(id);
    return {
      props: { personData },
    };
  } catch (error) {
    console.error("Error fetching person data:", error);
    return {
      props: { personData: null },
    };
  }
}

const PersonDetail = ({ personData }) => {
  if (!personData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    biography,
    profile_path,
    known_for_department,
    gender,
    birthday,
    place_of_birth,
    id,
  } = personData;

  return (
    <div>
      <Head>
        {/* Head section for metadata */}
        <title>FilmFinder</title>
        <meta
          name="description"
          content="FilmFinder is a dedicated web platform for cinema enthusiasts. Discover the latest movies, create lists of your favorite films, and learn about actors and directors. Step into the world of cinema with FilmFinder and enjoy an immersive movie experience."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PersonalInfo
        name={name}
        biography={biography}
        profilePath={profile_path}
        knownCredits={198} // Example value for known credits, modify as needed
        knownForDepartment={known_for_department}
        gender={gender === 2 ? "Male" : "Female"}
        birthday={birthday}
        placeOfBirth={place_of_birth}
      />
      <PersonCredits personId={id} />
    </div>
  );
};

export default PersonDetail;
