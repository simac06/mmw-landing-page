export const deskStructure = (S, context) =>
  S.list()
    .title(`Music's Most Wanted`)
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => '🏠')
        .child(S.editor().schemaType('home').documentId('home')),
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(S.editor().schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !['media.tag', 'home', 'siteSettings'].includes(listItem.getId()),
      ),
    ])
