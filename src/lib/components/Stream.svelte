<script lang="ts">
    import { browser } from "$app/environment";
    import { Row, Symbol, Text } from "duckylib";

    interface StreamProps {
        stream: any;
    }

    let { stream }: StreamProps = $props();
</script>

<a href="https://twitch.tv/{stream.user_login}" target="_blank">
    <div>
    <Text weight="bold">@{stream.user_name}</Text>
    <Row gapEm={0.2}>
        <div class="red">
            <Symbol name="group" inheritColor={true} sizePx={18} />
        </div>
        <Text weight="bold">{stream.viewer_count.toLocaleString()}</Text>
        <Text weight="semibold">&RightArrow; {stream.game_name}</Text>
    </Row>
</div>
</a>

<style>
    .red {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    div:not(.red) {
        background-color: var(--crust);
        border: 3px solid var(--mantle);
        border-radius: var(--border-md);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0.7em;
        gap: 0.1em;
    }

    div:hover {
        transition: 0.2s all;
        scale: 1.05;
        cursor: pointer;
    }
</style>
