import {QuestionMarkCircleIcon, StopIcon} from '@heroicons/react/24/outline'
import React from 'react'
import {Deck, FlexBox, Heading, Image, Slide, Text} from 'spectacle'

export default function MainDeck() {
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
          // @ts-ignore
          background: '#fff',
        },
      }}
    >
      <Slide>
        <Heading>A Smile</Heading>

        <FlexBox alignItems="center">
          <Image src="/smile.png" width={300} alt="A smile for you" />
        </FlexBox>

        <Heading>For You</Heading>
      </Slide>

      <Slide>
        <Text fontSize={55} textAlign="left">
          <strong>LIFE CAN BE DIFFICULT.</strong>
        </Text>

        <Text>DO YOU EVER FEEL LIKE NOBODY REALLY CARES?</Text>
      </Slide>

      <Slide>
        <Text fontSize={60} textAlign="left">
          <strong>WELL, GOD CARES!</strong>
        </Text>

        <Text>He knows all about you, and He sends you this message</Text>
      </Slide>

      <Slide>
        <Text>
          Do you know for sure that <strong>Heaven</strong> is your Home?
        </Text>

        <FlexBox alignItems="center" justifyContent="start">
          <StopIcon height={40} width={40} style={{marginRight: 10}} />
          <Text>YES</Text>
        </FlexBox>

        <FlexBox alignItems="center" justifyContent="start">
          <StopIcon height={40} width={40} style={{marginRight: 10}} />
          <Text>NO</Text>
        </FlexBox>

        <FlexBox alignItems="center" justifyContent="start">
          <StopIcon height={40} width={40} style={{marginRight: 10}} />
          <Text>I HOPE SO</Text>
        </FlexBox>
      </Slide>

      <Slide>
        <Text>After you have answered this question, read the next few Bible verses.</Text>
        <Text>Then you will know for sure if you are really going to Heaven according to the Bible, God's Word.</Text>
      </Slide>

      <Slide>
        <Text>The Bible says,</Text>

        <Text>
          <strong>
            "For all have sinned, and come short of the glory of God."
            <br />
            Romans 3:23
          </strong>
        </Text>
      </Slide>

      <Slide>
        <Text>Have you ever lied or taken something that belonged to someone else?</Text>
        <Text>Then you have sinned.</Text>
        <Text>Everyone is a sinner.</Text>
      </Slide>

      <Slide>
        <Text>The Bible says,</Text>
        <Text>
          <strong>
            "For the wages of sin is death: but the gift of God is eternal life through Jesus Christ our Lord."
            <br />
            Romans 6:23
          </strong>
        </Text>
      </Slide>

      <Slide>
        <Text>That's right.</Text>
        <Text>Sin separates us from God.</Text>
        <Text>There is a price on our sin.</Text>
      </Slide>

      <Slide>
        <Text>If we die in our sins, we are eternally lost and forever separated from God.</Text>
        <Text>God offers another way.</Text>
      </Slide>

      <Slide>
        <Text>We can have eternally life as a free gift.</Text>
        <Text>This means we can't earn it by being good, or by going to church, or by baptism, or anything else.</Text>
      </Slide>

      <Slide>
        <Text>We simply receive eternal life as a free gift through Jesus Christ.</Text>
        <Text>God's Son.</Text>
      </Slide>

      <Slide>
        <Text>The Bible says,</Text>

        <Text>
          <strong>"But as many as received Him, to them gave He power to become the sons of God." John 1:12</strong>
        </Text>
      </Slide>

      <Slide>
        <Text>
          <strong>HAVE YOU TAKEN THE STEP OF FAITH TO RECEIVE JESUS CHRIST AS YOUR PERSONAL SAVIOR?</strong>
        </Text>
      </Slide>

      <Slide>
        <Text>Jesus said,</Text>

        <Text>
          <strong>
            "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to
            him..." Revelation 3:20
          </strong>
        </Text>
      </Slide>

      <Slide>
        <Text>He is talking about the door of your heart!</Text>
      </Slide>

      <Slide>
        <Text>
          If your best friend knocked at the door of your home, you would say, <strong>"Come in," wouldn't you?</strong>
        </Text>

        <Text>
          My Friend, the Lord Jesus Christ is knocking at <strong>YOUR</strong> heart's door right now!
        </Text>
      </Slide>

      <Slide>
        <Text>Will you receive Him? Will you invite Him into your heart and life?</Text>
        <Text>How can you do this?</Text>
      </Slide>

      <Slide>
        <Text>
          <strong>Romans 10:13</strong> says,
        </Text>
        <Text>
          <strong>"For whosoever shall call upon the name of the Lord shall be saved."</strong>
        </Text>
        <Text>
          Whosoever means anybody. Whosoever means <strong>YOU!</strong>
        </Text>
      </Slide>

      <Slide>
        <Text fontSize={60} textAlign="left">
          <strong>What will your answer be?</strong>
        </Text>
        <Text>
          <strong>Don't put it off!</strong>
        </Text>
      </Slide>

      <Slide>
        <Text>Right now you can receive the Lord Jesus Christ, if you'll pray and mean it in your heart:</Text>
      </Slide>

      <Slide>
        <Text>"Dear Jesus,</Text>
        <Text fontSize={35}>
          I admit that I am a sinner. Please forgive me. Right now I receive You into my heart as my own personal
          Savior. Please take away my sins, and take me to Heaven when I die.
        </Text>
        <Text>In Jesus' name, Amen."</Text>
      </Slide>

      <Slide>
        <QuestionMarkCircleIcon width={200} />

        <Text fontSize={60}>
          <strong>Which Choice Did You Make?</strong>
        </Text>

        <Text>Did you pray that prayer and mean it?</Text>
      </Slide>

      <Slide>
        <Text>
          <strong>Did you trust Jesus Christ as your personal Savior?</strong>
        </Text>

        <FlexBox alignItems="center" justifyContent="start">
          <div>
            <StopIcon height={40} width={40} style={{marginRight: 10}} />
          </div>
          <Text>I received</Text>
        </FlexBox>

        <FlexBox alignItems="center" justifyContent="start">
          <div style={{flex: 1}}>
            <StopIcon height={40} width={40} style={{marginRight: 10}} />
          </div>
          <Text>I did not receive (I rejected)</Text>
        </FlexBox>
      </Slide>

      <Slide>
        <Text>The Bible says,</Text>
        <Text>
          <strong>
            "He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life;
            but the wrath of God abideth on him."
            <br />
            John 3:36
          </strong>
        </Text>
      </Slide>

      <Slide>
        <Text>
          If you received Jesus Christ as your Savior, call or write us so that we may rejoice with you and help you in
          your Christian life.
        </Text>
        <Text>May God bless you!</Text>
      </Slide>

      <Slide>
        <Text>Your friend,</Text>
        <Text fontSize={30}>
          <strong>Dr. Brad Weniger</strong>
          <br />
          Central Baptist Church
        </Text>
        <Text fontSize={30}>
          13910 Minnieville Road Woodbridge, VA 22193
          <br />
          (703) 583-1717
          <br />
          office@cbcwoodbridge.org
        </Text>
      </Slide>
    </Deck>
  )
}
