<script lang="ts">
    import {
        Button,
        ButtonCard,
        Column,
        Footer,
        Heading,
        InfoCard,
        Row,
        Text,
    } from "duckylib";
    import spoofify_Logo from "$lib/assets/spoofify_logo.png";
    import { MediaQuery } from "svelte/reactivity";
    import {
        PUBLIC_MOBILE_SIZE_PX,
        PUBLIC_TWITCH_CLIENT_ID,
    } from "$env/static/public";
    import { AppConfig } from "$lib/config";
    import { onMount } from "svelte";
    import type { ApiResponse } from "$lib/types";
    import Stream from "$lib/components/Stream.svelte";

    let mobileQuery = new MediaQuery(`max-width: ${PUBLIC_MOBILE_SIZE_PX}px`);

    async function fetchStreams(): Promise<any[]> {
        let apiStreams: any[] = await Promise.all(
            AppConfig.demo_channels.map(async (channel) => {
                let res: ApiResponse<any> = await (
                    await fetch(
                        `/api/streams/${channel.toLowerCase()}?client_id=${PUBLIC_TWITCH_CLIENT_ID}`,
                    )
                ).json();
                return res.data || null;
            }),
        );

        return apiStreams;
    }

    let streams: any[] = $state([]);

    onMount(async () => {
        streams = (await fetchStreams()).filter((s) => s !== null).sort((a, b) => b.viewer_count - a.viewer_count);
        console.log(streams);
    });
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
            <img src={spoofify_Logo} alt="" height={48} />
            <Heading size={2} weight="black">Spoofify</Heading>
        </Row>
        <Text
            >A Spotify-focused Now Playing Overlay & Queue Management Twitch bot
            by <a href="https://ducky.wiki" target="_blank">🦆 ducky</a></Text
        >
    </Column>

    <Row heightPx="fit" flexWrap={true}>
        <ButtonCard
            title="Documentation"
            text="Read the Spoofify docs for everything you'll need to get started!"
            symbol="book"
            buttons={[
                {
                    text: "View Docs",
                    type: "primary",
                    href: "https://docs.ducky.wiki/projects/spoofify",
                },
            ]}
        />
        <ButtonCard
            title="Run Spoofify"
            text="Want to use Spoofify? You can self-host it, or contact Ducky for help!"
            symbol="code"
            buttons={[
                {
                    text: "Github Repository",
                    type: "primary",
                    href: "https://github.com/duckyyylol/Spoofify",
                },
                {
                    text: "Contact Ducky",
                    type: "secondary",
                    href: "https://ducky.wiki/travel/discord",
                },
            ]}
        />
    </Row>

    {#if streams.length > 0}
        <Column heightPx="fit" textWrap={true} widthPercent={80}>
            <Heading size={4} weight="bolder">See Spoofify in Action</Heading>
            <Text
                >Check out any of the Twitch streamers currently running
                Spoofify to see how it could work for you!</Text
            >
            <Row
                heightPx="fit"
                alignItems="flex-end"
                justifyContent="center"
                flexWrap={true}
                widthPercent={90}
                marginLeftPx="auto"
                marginRightPx="auto"
                textAlign="center"
            >
                {#each streams as stream}
                    <Stream {stream} />
                {/each}
            </Row>
        </Column>
    {/if}

    <Text classList={["italic"]}
        >Website made with caffeine and <a
            href="https://ducky.wiki/travel/github/duckylib"
            target="_blank"><u>duckylib</u></a
        ></Text
    >
</Column>
