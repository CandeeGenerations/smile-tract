import {ArrowLongLeftIcon, ArrowLongRightIcon} from '@heroicons/react/24/outline'
import {Deck, FlexBox, Image, Slide, Text} from 'spectacle'

export default function MainDeck() {
  const nextArrow = (
    <Text>
      <ArrowLongRightIcon width={35} />
    </Text>
  )

  return (
    <Deck
      {...{backdropStyle: {background: '#fff'}}}
      pageSize="7.68in 13.66in"
      pageOrientation="portrait"
      theme={{
        colors: {
          primary: '#000',
          secondary: '#000',
          tertiary: '#fff',
          // @ts-expect-error N/A
          background: '#fff',
        },
      }}
    >
      <Slide>
        <Text textAlign="center">
          <strong>A Smile</strong>
          <br />
          <Image src="/smile.png" width={150} alt="A smile for you" />
          <br />
          <strong>For You</strong>
        </Text>

        <Text textAlign="center" fontSize={25}>
          Swipe to read
          <br />
          <ArrowLongRightIcon width={35} />
        </Text>
      </Slide>

      <Slide>
        <Text textAlign="left">LIFE CAN BE DIFFICULT.</Text>

        <Text>DO YOU EVER FEEL LIKE NOBODY REALLY CARES?</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text textAlign="left">WELL, GOD CARES!</Text>

        <Text>He knows all about you, and He sends you this message.</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>Are you 100% sure that if you died right now that you would go to Heaven?</Text>

        <Text>YES</Text>
        <Text>NO</Text>
        <Text>I HOPE SO</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          The Bible says that you can <u>know</u> so!
        </Text>
        <Text>Keep reading the next few Bible verses.</Text>
        <Text>Then you will know for sure if you are going to Heaven.</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          <u>FIRST</u>,
        </Text>
        <Text>Admit that you (and all of us) have sinned.</Text>

        <Text>
          The Bible, God's Word, says,
          <br />
          <strong>
            "For all have sinned, and come short of the glory of God."
            <br />
            Romans 3:23
          </strong>
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>Have you ever lied or taken something that didn't belong to you?</Text>
        <Text>Then you have sinned.</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          <u>SECOND</u>,
        </Text>
        <Text>Recognize that the price on our sin is death and hell.</Text>

        <Text>
          The Bible says,
          <br />
          <strong>
            "For the wages of sin is death..."
            <br />
            Romans 6:23a
          </strong>
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          <u>THIRD</u>,
        </Text>
        <Text>
          Eternal life in Heaven is a FREE GIFT from God if you receive the Lord Jesus Christ as your personal Savior.
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          The Bible says,
          <br />
          <strong>
            "The gift of God is eternal life through Jesus Christ our Lord."
            <br />
            Romans 6:23b
          </strong>
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          <u>FINALLY</u>,
        </Text>
        <Text>Call on the Lord in prayer, and by faith, ask Him to save you from your sins!</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          The Bible says,
          <br />
          <strong>
            "For whosoever shall call upon the name of the Lord shall be saved."
            <br />
            Romans 10:13
          </strong>
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          <u>Whosoever</u> means anybody.
        </Text>

        <Text>
          <u>Whosoever</u> means YOU!
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          <u>RIGHT NOW</u>, bow your head, and <u>repeat this prayer</u> to God, sincerely meaning it in your heart:
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>"Dear Jesus,</Text>
        <Text fontSize={35}>
          I admit that I am a sinner. Please forgive me. Right now I receive You into my heart as my own personal
          Savior. Please take away my sins, and take me to Heaven when I die.
        </Text>
        <Text>In Jesus' name, Amen."</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>Did you sincerely pray that prayer and trust Jesus Christ as your personal Savior?</Text>

        <Text>I received.</Text>

        <Text>
          I did not receive.
          <br />
          (I rejected)
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          The Bible says,
          <br />
          <strong>
            "He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life;
            but the wrath of God abideth on him."
            <br />
            John 3:36
          </strong>
        </Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>
          If you received Jesus Christ, please contact us so that we may rejoice with you and help you in your Christian
          life.
        </Text>
        <Text>May God bless you!</Text>

        {nextArrow}
      </Slide>

      <Slide>
        <Text>Your friend,</Text>

        <Text fontSize={30}>
          <strong>Dr. Brad Weniger</strong>
          <br />
          Central Baptist Church
        </Text>

        <Text fontSize={30}>
          13910 Minnieville Road
          <br />
          Woodbridge, VA 22193
          <br />
          (703) 583-1717
          <br />
          office@cbcwoodbridge.org
        </Text>

        <FlexBox justifyContent="start" alignItems="center">
          <ArrowLongLeftIcon width={30} style={{marginLeft: 32, marginRight: -15}} />

          <a href="/?slideIndex=0&stepIndex=0">
            <Text fontSize={25} className="link">
              Read from the beginning
            </Text>
          </a>
        </FlexBox>
      </Slide>
    </Deck>
  )
}
