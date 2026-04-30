<script lang="ts">
    import { Button, ButtonCard, Column, Footer, Heading, InfoCard, Row, Text } from "duckylib";
    import spoofify_Logo from "$lib/assets/spoofify_logo.png"
    import { MediaQuery } from "svelte/reactivity";
    import { PUBLIC_MOBILE_SIZE_PX } from "$env/static/public";

    let mobileQuery = new MediaQuery(`max-width: ${PUBLIC_MOBILE_SIZE_PX}px`);
</script>

<Column
    widthPercent={90}
    heightPercent={mobileQuery.current ? 100 : 90}
    justifyContent="center"
    alignItems="center"
    textAlign="left"
    marginLeftPx="auto"
    marginRightPx="auto"
    gapEm={4}
>
    <Column heightPx="fit" widthPx="fit" textWrap={true}>
        <Row heightPx="fit">
        <img src={spoofify_Logo} alt="" height={48}>
        <Heading size={2} weight="black">Spoofify</Heading>
        
        </Row>
        <Text>A Spotify-focused Now Playing Overlay & Queue Management Twitch bot by <a href="https://ducky.wiki" target="_blank">🦆 ducky</a></Text>
    </Column>

    <Row heightPx="fit" flexWrap={true}>
        <ButtonCard title="Documentation" text="Read the Spoofify docs for everything you'll need to get started!" symbol="book" buttons={[{
            text: "View Docs",
            type: "primary",
            href: "https://docs.ducky.wiki/projects/spoofify"
        }]} />
        <ButtonCard title="Run Spoofify" text="Want to use Spoofify? You can self-host it, or contact Ducky for help!" symbol="code" buttons={[
            {
                text: "Github Repository",
                type: "primary",
                href: "https://github.com/duckyyylol/Spoofify"
            },
            {
                text: "Contact Ducky",
                type: "secondary",
                href: "https://ducky.wiki/travel/discord",
            }
        ]} />
    </Row>

    <!-- <Column heightPx="fit" textWrap={true} widthPercent={80}>
        <Heading size={4} weight="bolder">See Spoofify in Action</Heading>
        <Text>Check out any of the Twitch streamers currently running Spoofify to see how it could work for you!</Text>
        <Row heightPx="fit" alignItems="flex-end" justifyContent="center" flexWrap={true} widthPercent={60} marginLeftPx="auto" marginRightPx="auto" textAlign="center">
            <Button type="primary" label="@HearteyesKuromii" href="https://twitch.tv/hearteyeskuromii" />
            <Button type="primary" label="@duckyyylive" href="https://twitch.tv/duckyyylive" />
        <Column heightPx="fit" widthPx="fit" alignItems="center" gapEm={0.66}>
            <Heading size={6} weight="bolder">Live Demo</Heading>
            <Button type="secondary" label="@SpoofifyDev" href="https://twitch.tv/SpoofifyDev" />
        </Column>
        </Row>
    </Column> -->

    
    <Text classList={["italic"]}>Website made with caffeine and <a href="https://ducky.wiki/travel/github/duckylib" target="_blank"><u>duckylib</u></a></Text>
</Column>
