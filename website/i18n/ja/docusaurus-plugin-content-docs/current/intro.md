---
sidebar_position: 1
_i18n_hash: 252240b2a37c8c4784462e75b56d5243
---
# はじめに

## Tianjiとは

一言でまとめると:

**Tianji** = **ウェブサイト分析** + **稼働率モニター** + **サーバーステータス**

### なぜTianjiという名前なのか？

Tianji（天機、発音 Tiān Jī）は中国語で**天の機会**または**戦略**を意味します。

「天」（Tiān）と「機」（Jī）はそれぞれ「天」と「機械」または「メカニズム」と訳されます。組み合わせると、高い力や天の力によって導かれるような戦略的または機会的な計画や機会を指すかもしれません。

## 動機

ウェブサイトの観察中、私たちはしばしば複数のアプリケーションを一緒に使用する必要があります。例えば、pv/uvや各ページへの訪問数を確認するために`GA`/`umami`のような分析ツールが必要です。サーバーのネットワーク品質と接続性を確認するために稼働率モニターが必要です。また、サーバーから報告されるステータスを取得してサーバーの品質を確認するためにprometheusを使用する必要があります。さらに、オープンソースで展開できるアプリケーションを開発する場合、他の人の展開状況に関する最も基本的な情報を収集するためにテレメトリシステムが必要になることがよくあります。

これらのツールは同じ目的を果たすべきだと思います。それでは、これらの一般的なニーズを軽量な方法で統合できるアプリケーションはあるのでしょうか？ほとんどの場合、非常に専門的で深い機能は必要ありません。しかし、包括的な監視を実現するためには、これほど多くのサービスをインストールする必要があります。

一つのことに特化するのは良いことです。関連する能力において専門家である場合、そのような専門的なツールが必要です。しかし、軽量なニーズしか持たないほとんどのユーザーにとって、**オールインワン**アプリケーションの方が便利で使いやすいでしょう。

## インストール

Dockerを使ってTianjiをインストールするのは非常に簡単です。dockerとdocker-composeプラグインがインストールされていることを確認してください。

そして、どこでもこれらのコマンドを実行してください:

```bash
wget https://raw.githubusercontent.com/msgbyte/tianji/master/docker-compose.yml
docker compose up -d
```

> デフォルトのアカウントは**admin**/**admin**です。パスワードはすぐに変更してください。

## コミュニティ

仲間のユーザーとつながり、経験を共有し、最新の機能や開発について知るために、私たちの活気あるコミュニティに参加してください。協力し、質問し、Tianjiコミュニティの成長に貢献しましょう。

- [GitHub](https://github.com/msgbyte/tianji)
- [Discord](https://discord.gg/8Vv47wAEej)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/tianji)