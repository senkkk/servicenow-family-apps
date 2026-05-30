# ServiceNow SDK Development Rules

## Development Build

During development in Codex Cloud, always validate changes with:

```bash
bash scripts/sn-build.sh
```

## Pull Request Format

Codex Cloud から Pull Request を作成する場合は、GitHub の `.github/pull_request_template.md` だけに依存せず、PR 本文に以下のフォーマットを使用してください。

```markdown
## 概要
<!-- このPRで何を変更したか、背景や目的が分かるように簡潔に記載してください。 -->

-

## 変更内容
<!-- 主な変更点を箇条書きで記載してください。 -->

-

## 影響範囲
<!-- 影響を受ける機能、画面、データ、運用などがあれば記載してください。 -->

-

## レビュー観点
<!-- レビュアーに重点的に見てほしい点があれば記載してください。 -->

-

## 関連情報
<!-- 関連Issue、チケット、仕様書、参考資料などがあれば記載してください。 -->

-
```
